// frontend\src\components\BowlerTable.tsx
// This component is responsible for displaying a table of bowlers fetched from the backend API.

import { useEffect, useState } from 'react';
import type { Bowler } from '../types/Bowler';
import { getBowlers } from '../services/bowlerApi';

function BowlerTable() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]); // State to hold the list of bowlers

  // Fetch bowlers from the API when the component mounts
  useEffect(() => {
    const fetchBowlers = async () => {
      const bowlers = await getBowlers();
      setBowlers(bowlers);
    };

    fetchBowlers();
  }, []);

  return (
    <table className="bowler-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {bowlers.map(b => (
          <tr key={b.bowlerID}>
            <td>{b.bowlerFirstName} {b.bowlerMiddleInit || ''} {b.bowlerLastName}</td>
            <td>{b.team?.teamName}</td>
            <td>{b.bowlerAddress}</td>
            <td>{b.bowlerCity}</td>
            <td>{b.bowlerState}</td>
            <td>{b.bowlerZip}</td>
            <td>{b.bowlerPhoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BowlerTable;
