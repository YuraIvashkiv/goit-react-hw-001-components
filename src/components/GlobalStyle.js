import { createGlobalStyle } from 'styled-components'
import 'modern-normalize'

export const GlobalStyle = createGlobalStyle`
body{
    margin:0;
}
ul{
    margin:0;
    padding:0;
    list-style:none;
};
img{
    display:block;
    max-width:100%;
}
;
table {
  border-collapse: collapse;
};

table th,
table td {
  padding: 10px;
  border: 1px solid #2a2a2a;
}
`;
