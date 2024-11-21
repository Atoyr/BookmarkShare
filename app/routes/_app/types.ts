export interface profile {
  name: string | null, 
  email: string | null, 
  avatarUrl: string | null, 
}

export interface space {
  id: string, 
  name: string, 
  isPrivate: boolean, 
  bookmarkGroups : bookmarkGroup[], 
}

export interface bookmarkGroup {
  id: string, 
  name: string, 
}

