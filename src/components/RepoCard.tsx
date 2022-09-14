import { Component } from 'solid-js';
import { saveRepos, setSaveRepos } from '../pages/SavedRepos';

export type Repo = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
  };
};
interface Props {
  repo: Repo;
}

const saveRepo = (repo: Repo) => {
  setSaveRepos([repo, ...saveRepos()]);
  localStorage.setItem('savedRepos', JSON.stringify(saveRepos()));
};

const unSaveRepo = (repoId: string) => {
  setSaveRepos(saveRepos()?.filter((repo) => repo.id !== repoId));
  localStorage.setItem('savedRepos', JSON.stringify(saveRepos()));
};

const repoIsSaved = (repoId: string) => {
  return saveRepos()?.some((repo) => repo.id === repoId);
};

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class='rounded-lg border border-neutral-200 p-4 my-4 space-y-2'>
      <div class='border-b border-neutral-100 bg-neutral-50'>
        &#11088; stars:{' '}
        <span class='text-sm font-mono'>{repo.stargazers_count}</span>
      </div>
      <div>
        <a href={repo.html_url} target='_blank' rel='noreferref'>
          <strong class='text-blue-800 text-lg'>
            {repo.owner?.login}/{repo.name}
          </strong>
        </a>
        <p class='text-sm'>{repo.description}</p>
        {repoIsSaved(repo.id) ? (
          <button
            class='px-2 py-1 bg-rose-800 text-white rounded text-sm my-2'
            onClick={() => unSaveRepo(repo.id)}>
            UnSave
          </button>
        ) : (
          <button
            class='px-2 py-1 bg-teal-800 text-white rounded text-sm my-2'
            onClick={() => saveRepo(repo)}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
