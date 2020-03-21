import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SleepEntry } from './SleepEntry';

export const SleepEntriesList = () => {
  const { sleepEntries } = useContext(GlobalContext);

  return (
    <div>
      <h3>Entries</h3>
      <ul className="list">{sleepEntries.map((e) => <SleepEntry key={e.id} sleepEntry={e} />)}</ul>
    </div>
  );
};
