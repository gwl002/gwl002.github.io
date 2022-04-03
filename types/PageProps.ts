import { Issue, Tag } from './Article'

export type PageProps = {
    title: string
    subTitle: string
}

export type IndexPageProps = {
    list?: Issue[]
    tags?: Tag[]
} & PageProps

export type ArchivePageProps = { list?: Issue[] } & PageProps

export type ArticlePageProps = Issue & { headType: string }
