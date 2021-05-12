export type StyledText = {

  style: {

    align?: string
    lineSpacing?: number // Like in Word, lineSpacing = leading / lineHeight

    font?: {
      family?: string
      style?: string
      variant?: string
      size?: number | string
      weight?: number | string
    }

    color?: string

    stroke?: {
      enabled?: boolean // default to false
      width?: number
      color?: string
    }

    shadow?: {
      enabled?: boolean // default to false
      angle?: number
      blur?: number
      distance?: number
      color?: number
      alpha?: number
    }

  }

  children: string | StyledText[]

}
