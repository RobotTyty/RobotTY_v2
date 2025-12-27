export interface ResourceLink {
  url: string;
  text: string;
}

export interface GuideStep {
  text: string;
}

export interface GuideSection {
  id: string;
  title: string;
  emoji: string;
  content: string;
  steps: GuideStep[];
  links: ResourceLink[];
}