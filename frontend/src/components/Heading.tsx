// frontend\src\components\Heading.tsx
// This component displays a heading and a brief description for the Bowling League application.

function Heading () {
    return (
        <div>
            <h1>Welcome to the Bowling League!</h1>
            <p style={{ fontSize: '1.1em'}}>This page allows you to view bowlers in the league.</p>
            <p style={{ color: 'gray', fontSize: '0.9em', fontStyle: 'italic' }}>Note that only bowlers from the Marlins and Sharks teams are displayed.</p>
        </div>
    );
}

export default Heading;