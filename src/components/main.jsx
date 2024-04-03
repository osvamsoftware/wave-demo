import Visor from './visor';

function Main() {
  return (
   <div  style={container}>
    <h1>Plan de Ortodoncia Invisible</h1>
    <Visor/>
    <h1> 1 - 2 - 3 - 4 ... 19 -20</h1>

   </div>
        
    
  );
}

const container = {
    flexGrow: 1,
    backgroundColor: '#f1f5f9',
    //width: '500px',
    // height:'100px',
    //margin: '0 auto',
    padding: '2px',
    overflow: 'hidden',

};

export default Main;
