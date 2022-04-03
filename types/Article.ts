export type Tag = {
    name?: string
    color?: string
}

export type SeoProps = {
    description?: string
    keywords?: string[]
}

export type Issue = {
    id: string
    title?: string
    body: string
    url: string
    createdAt: string
    tags: Tag[]
} & SeoProps
