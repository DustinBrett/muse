import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FBDataEntry {
  created_time: string;
  id: string;
  images?: FBImageEntry[];
  message?: string;
}

interface FBData {
  data: FBDataEntry[];
  paging: {
    next: string;
    previous: string;
  };
}

interface FBImageEntry {
  height: number;
  source: string;
  width: number;
}

interface FBImages {
  images: FBImageEntry[];
  id: string;
}

interface FBSubAttachmentEntry {
  media: {
    image: {
      height: number;
      src: string;
      width: number;
    }
  };
  target: {
    id: string;
    url: string;
  };
  type: string;
  url: string;
}

interface FBAttachmentEntry {
  subattachments: {
    data: FBSubAttachmentEntry[];
  };
  target: {
    id: string;
    url: string;
  };
  title: string;
  type: string;
  url: string;
}

interface FBAttachments {
  attachments: {
    data: FBAttachmentEntry[];
  };
  id: string;
}

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent {
  private readonly myUrl = 'https://graph.facebook.com/v3.3/';
  private readonly accessToken = ''; // NOTE: Fill in while testing

  public feed: FBDataEntry[];

  private readonly fbApi = (endpoint: string) => {
    const querySeperator = endpoint.includes('?') ? '&' : '?';
    const accessToken = `access_token=${ this.accessToken }`;

    return `${ this.myUrl }${ endpoint }${ querySeperator }${ accessToken }`;
  }

  private readonly hasAttachments = (attachmentData: FBAttachments) => {
    return (
      attachmentData &&
      attachmentData.attachments &&
      attachmentData.attachments.data &&
      attachmentData.attachments.data.length &&
      attachmentData.attachments.data[0].subattachments &&
      attachmentData.attachments.data[0].subattachments.data
    );
  }

  constructor(private readonly http: HttpClient) {
    http.get(this.fbApi('me/feed')).subscribe((feedData: FBData) => {
      feedData.data.forEach(feedEntry => {
        http.get(this.fbApi(`${ feedEntry.id }?fields=attachments`))
          .subscribe((attachmentData: FBAttachments) => {
            if (this.hasAttachments(attachmentData)) {
              attachmentData.attachments.data[0].subattachments.data.forEach(subAttachmentEntry => {
                http.get(this.fbApi(`${ subAttachmentEntry.target.id }?fields=images`))
                  .subscribe((imageData: FBImages) => {
                    feedEntry.images = imageData.images;
                  });
              });
            }
          });
      });

      this.feed = feedData.data;
    });
  }
}
