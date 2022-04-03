import { Tag } from './Article'
import { PageProps } from './PageProps'

export type HeaderProps = {
    headType: string
    tags: Tag[]
    createdAt: string
} & PageProps
