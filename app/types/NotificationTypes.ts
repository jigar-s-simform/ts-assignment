export interface NotificationType {
  collapseKey: string;
  from: string;
  messageId: string;
  notification: Partial<{
    android: Record<string, string>;
    body: string;
    title: string;
    clickActionUrl: string;
    iconUrl: string;
  }>;
  sentTime: number;
  ttl: number;
}
