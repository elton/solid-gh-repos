import { NavLink } from 'solid-app-router';
import { Component } from 'solid-js';
import { saveRepos } from '../pages/SavedRepos';

const Nav: Component = () => {
  return (
    <nav class='mt-5 mb-3 space-x-2'>
      <NavLink
        href='/'
        class='border px-2 py-1 bg-emerald-700 rounded text-white'
        end
        activeClass='bg-rose-700'>
        Home
      </NavLink>
      <NavLink
        href='/favrepos'
        class='border px-2 py-1 bg-emerald-700 rounded text-white'
        activeClass='bg-rose-700'>
        Saved ~ {saveRepos().length}
      </NavLink>
    </nav>
  );
};

export default Nav;
