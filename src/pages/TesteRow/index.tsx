// import {
//   TesteVeiling,
//   TopContainer,
//   CenterContainer,
//   CenterLeftContainer,
//   Row01,
//   Frame433,
//   Codigo,
//   InputCodigo,
//   CenterRightContainer,
//   FooterContainer,
// } from './styles';

// const TesteRow = () => {
//   return (
//     <TesteVeiling>
//       <TopContainer />
//       <CenterContainer>
//         <CenterLeftContainer>
//           <Row01>
//             <Frame433>
//               <Codigo
//                 // label="Código:"
//                 name="codigo"
//                 rules={[{ required: true, message: 'Campo obrigatório' }]}
//               >
//                 <InputCodigo />
//               </Codigo>
//             </Frame433>
//             <Frame433>
//               <Codigo
//                 // label="Código:"
//                 name="codigo"
//                 rules={[{ required: true, message: 'Campo obrigatório' }]}
//               >
//                 <InputCodigo />
//               </Codigo>
//             </Frame433>
//             <Frame433>
//               <Codigo
//                 // label="Código:"
//                 name="codigo"
//                 rules={[{ required: true, message: 'Campo obrigatório' }]}
//               >
//                 <InputCodigo />
//               </Codigo>
//             </Frame433>
//             <Frame433>
//               <Codigo
//                 // label="Código:"
//                 name="codigo"
//                 rules={[{ required: true, message: 'Campo obrigatório' }]}
//               >
//                 <InputCodigo />
//               </Codigo>
//             </Frame433>
//           </Row01>
//         </CenterLeftContainer>
//         <CenterRightContainer />
//       </CenterContainer>
//       <FooterContainer />
//     </TesteVeiling>
//   );
// };

// export default TesteRow;

import {
  TesteVeiling,
  TopContainer,
  CenterContainer,
  CenterLeftContainer,
  CenterRightContainer,
  FooterContainer,
} from './styles';

const TesteRow = () => {
  return (
    <TesteVeiling>
      <TopContainer />
      <CenterContainer>
        <CenterLeftContainer />
        <CenterRightContainer />
      </CenterContainer>
      <FooterContainer />
    </TesteVeiling>
  );
};

export default TesteRow;
