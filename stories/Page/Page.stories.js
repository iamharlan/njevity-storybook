import { Page } from "./Page"
import * as HeaderStories from "../Header/Header.stories"

export default {
  title: "Components/Page",
  render: (args) => Page(args),
}

export const LoggedIn = {
  args: {
    // More on composing args: https://storybook.js.org/docs/web-components/writing-stories/args#args-composition
    ...HeaderStories.LoggedIn.args,
  },
}

export const LoggedOut = {
  args: {
    ...HeaderStories.LoggedOut.args,
  },
}
