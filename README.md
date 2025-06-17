# Overview
 A collection of molecules for React projects.

## Prerequisites
- @ehubbell/utils
- @playbooks/ui

## Installation
```
npm install @ehubbell/molecules
```

## Usage
```tsx
import { useEffect, useState } from 'react';
import { SuccessToast } from '@ehubbell/molecules';

const WelcomeRoute = ({ app, ssr, account, router, search, session, store, toast }) => {
  const [loaded, setLoaded] = useState(false);

	// Hooks
  useEffect(() => {
    setLoaded(true);
  }, []);

	// Render
	return (
		<WelcomeWrapper title='Playbooks | Hybrid Source Software'>
    {loaded && <SuccessToast toast={{ title: 'Success', messgae: 'Welcome to my new app!' }} /> }
		</WelcomeWrapper>
	);
};

export default WelcomeRoute;

```

## Development
This project uses [yalc](https://npmjs.com/package/yalc) for local development.
- npm run dev
- switch to project
- npx yalc add @ehubbell/molecules
- After that, this library should hot reload into the consuming application

## Scripts
- We've included a couple of helpful scripts for faster development.
- deploy: `npm run deploy -- 'commit message'`
- publish: `npm run publish -- 'commit message' [major|minor|patch]`

## Husky
- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings

## Author
- [Eric Hubbell](http://www.erichubbell.com)
- eric@erichubbell.com

## Notes
To see this library in action, checkout the following projects:
- [playbooks](https://www.playbooks.xyz)
- [playbooks blog](https://blog.playbooks.xyz)
- [playbooks docs](https://docs.playbooks.xyz)