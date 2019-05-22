export interface PostData {
  rss: {
    channel: {
      item: Post[];
    }
  };
}

export interface Post {
  content?: string;
  title: string;
  link: string;
  pubDate: string;
  creator: PostFieldData;
  guid: {
    _isPermaLink: string;
    __text: string;
  };
  description: string;
  encoded?: (PostFieldData)[] | null;
  post_id: PostFieldText;
  post_date: PostFieldData;
  post_date_gmt: PostFieldData;
  comment_status: PostFieldData;
  ping_status: PostFieldData;
  post_name: PostFieldData;
  status: PostFieldData;
  post_parent: PostFieldText;
  menu_order: PostFieldText;
  post_type: PostFieldData;
  post_password: PostFieldData;
  is_sticky: PostFieldText;
  category: {
    _domain: string;
    _nicename: string;
    __cdata: string;
  };
  postmeta?: (PostMetaEntity)[] | null;
}

interface PostFieldData {
  __prefix: string;
  __cdata: string;
}

interface PostFieldText {
  __prefix: string;
  __text: string;
}

interface PostMetaEntity {
  meta_key: PostFieldData;
  meta_value: PostFieldData;
  __prefix: string;
}
