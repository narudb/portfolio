// import React, { useState } from 'react';
// import styled from 'styled-components';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';

// const FormWrapper = styled.div`
//   height: 45vh;
//   grid-area: asideTop;
//   display: grid;
//   padding: 17px 10px;
// `;

// const LoginPage = () => {
//   const [showSignup, toggleForm] = useState(true);
//   return (
//     <FormWrapper>
//       {showSignup ? (
//         <>
//           <SignUp />
//           <button>
//             type="button" onClick=
//             {() => {
//               toggleForm(false);
//             }}
//             > J&apos;ai déjà un compte !
//           </button>
//         </>
//       ) : (
//         <>
//           <SignIn />
//           <button
//             type="button"
//             onClick={() => {
//               toggleForm(true);
//             }}
//           >
//             Je peux m&apos;inscrire ?
//           </button>
//         </>
//       )}
//     </FormWrapper>
//   );
// };

// export default LoginPage;
