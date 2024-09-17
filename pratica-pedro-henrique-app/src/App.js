import CardPlans from './components/plans/CardPlans.jsx';
import NewMember from './components/new_member/NewMember.jsx';
import styled from "styled-components";

function App() {
  return (
    <>
    <h1>PLANS +</h1>
    <div></div>
    <CardPlans title="FREE" price="0" />

    <CardPlans title="PREMIUM" price="99" />

    <CardPlans title="PRO" price="199" />


    <h1>NEW MEMBER</h1>
    <NewMember title="FREE" price="0" />

    <NewMember title="PREMIUM" price="199" />

    <NewMember title="PRO" price="399" />

    </>

  );
}

export default App;
