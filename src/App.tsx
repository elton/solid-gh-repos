import { Route, Routes } from 'solid-app-router';
import { Component, createEffect, createSignal, lazy } from 'solid-js';
import Nav from './components/Nav';

const Home = lazy(() => import('./pages/Home'));
const SavedRepos = lazy(() => import('./pages/SavedRepos'));

const [username, setUsername] = createSignal('elton');
const [repos, setRepos] = createSignal([]);

createEffect(async () => {
  const res = await fetch(
    `https://api.github.com/users/${username()}/repos?sort=created` // It will be refetch when username changes.
  );
  setRepos(await res.json());
});

const App: Component = () => {
  return (
    <div class='container p-5'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favrepos' element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export { username, setUsername, repos };
export default App;
