import { lazy } from 'react';

import PATHS from './constants';

const SignIn = lazy(() =>
  import('@views').then((module) => ({ default: module.SignIn })),
);

const SkillTree = lazy(() =>
  import('@views').then((module) => ({ default: module.SkillTree })),
);

const routes = [
  { path: PATHS.HOME, element: <SkillTree /> },
  { path: PATHS.SIGN_IN, element: <SignIn /> },
  { path: PATHS.SKILL_TREE, element: <SkillTree /> },
];

export default routes;
