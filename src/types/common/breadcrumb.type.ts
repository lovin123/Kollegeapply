export interface IBreadcrumbItem {
  label: string;
  isActive: boolean;
}

export interface IBreadcrumbProps {
  items: IBreadcrumbItem[];
}
