import { Component } from 'solid-js';

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

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class='rounded-lg border border-neutral-200 p-4 my-4 space-y-2'>
      <div class='border-b border-neutral-100'>
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
        <button class='px-2 py-1 bg-teal-800 text-white rounded text-sm my-2'>
          Save
        </button>
      </div>
    </div>
  );
};

export default RepoCard;
