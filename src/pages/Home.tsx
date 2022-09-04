import { Component, For } from 'solid-js';
import { repos, setUsername, username } from '../App';
import RepoCard, { Repo } from '../components/RepoCard';

const Home: Component = () => {
  const refetchWithUsername = (event: Event) => {
    event.preventDefault();
    const usernameInput = document.querySelector(
      '#username'
    ) as HTMLInputElement;
    setUsername(usernameInput.value);
  };

  // createEffect(() => {
  //   console.log(repos());
  // });

  return (
    <div>
      <form
        class='mb-3 space-x-2'
        onSubmit={(event) => refetchWithUsername(event)}>
        <input
          type='text'
          class='px-8 py-1 border rounded'
          id='username'
          placeholder='enter a username...'
          required
        />
        <button class='border border-teal-700 px-2 py-1 rounded bg-neutral-800 text-white'>
          Fetch
        </button>
      </form>
      <h3>Github repository for {username()}</h3>
      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default Home;
