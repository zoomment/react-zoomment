# Welcome to Zoomment

Zoomment is an innovative, open-source commenting platform designed to transform your website into a vibrant community hub. With features like customizable themes, real-time notifications, RSS feed integration, and expressive emoji reactions, Zoomment makes it simple to foster engaging discussions and connect with your audience on a deeper level.

<img width="688" alt="Zoomment preview" src="https://raw.githubusercontent.com/zoomment/.github/main/zoomment-preview.png">

## How to Use

Add `react-zoomment` to your project by executing `npm install react-zoomment` or `yarn add react-zoomment`.

Here's an example of basic usage:

```jsx
import Zoomment from 'react-zoomment';

function MyApp() {
  return (
    <div>
      <Zoomment
        theme="dark"
        language="en"
        gravatar="monsterid"
        emotions="❤️,😀,🪄,🥸,💡,🤔,💩,😢"
      />
    </div>
  );
}
```

## Configuration Options

Zoomment is designed to be highly customizable, allowing you to tailor the commenting experience to fit your website’s theme and your audience's preferences. Here are the configuration options available through props:

| Attribute Name | Possible values                                                |
| -------------- | -------------------------------------------------------------- |
| theme          | light, dark, black                                             |
| language       | en, hy, hyw, ru, zh                                            |
| emotions       | list comma separated emojis, leave empty if not needed         |
| gravatar       | 404, mp, identicon, monsterid, wavatar, retro, robohash, blank |

## Contribute to Zoomment

We believe in the power of community and the incredible impact collaborative development can have on a project. That's why we invite developers, designers, and web enthusiasts to contribute to Zoomment. Whether it's adding new features, fixing issues, or improving documentation, your contributions are invaluable to us.

- Contribute Code: Feel inspired to add a feature or enhance existing ones? Fork our repo and submit a pull request.
- Fix an Issue: Browse through our issues, pick one that resonates with you, and help us refine Zoomment for everyone.
- Create Pull Requests: Your code improvements or feature additions are always welcome. Each pull request helps make Zoomment better for the community.

## The Importance of Donations

While Zoomment is free to use and contribute to, maintaining and developing the platform requires resources. This is where donations become crucial. Your support, whether through Patreon, GitHub Sponsors, or direct contributions, directly impacts our ability to improve and scale Zoomment. Donations help us:

- Maintain and improve technical support.
- Continue the development of new and exciting features.
- Fix bugs and enhance platform stability.
- Keep our team motivated and focused on making Zoomment the best open-source commenting platform.
