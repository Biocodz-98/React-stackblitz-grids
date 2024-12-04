import { range } from './utils';

const gridStyles = {
  width: '100px',
  height: '100px',
  border: 'light grey',
  borderRadius: '5px',
  display: 'grid',
  gap: '5px'
  
};

function Grid({ numRows, numCols }) {
return (
    <div style={gridStyles} className="grid">
      {/* {todo} */}
      {range(numRows).map((rowIndex) => (
        <div key={rowIndex} className= 'row' style={{display: 'flex', gap: '5px'}}>
      {range(numCols) .map((colIndex) => (
        <div key={colIndex} className= 'cell' style={{border: '1px solid grey', padding: '25px'}}></div>
        ))}

      </div>
      ))}
    </div>
  );
}

export default Grid;
