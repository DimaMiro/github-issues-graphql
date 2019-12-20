export interface GIssue {
    id: string,
    author: {
        login: string
    },
    date: string,
    title: string,
    updatedAt: string,
    closed: boolean
}
