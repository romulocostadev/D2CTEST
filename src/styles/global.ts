import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
   margin:0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    /* margin-top: 0; */
    margin-bottom: 0px !important;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
}

.ant-form-item-label > label {
  height: 0px !important
}

.ant-form-item-control-input {
  min-height: 0px !important
}

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration:none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .ant-form-vertical .ant-form-item-label, .ant-col-24.ant-form-item-label, .ant-col-xl-24.ant-form-item-label {
    padding: 0px
  }

  
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 0px
  }

`;
