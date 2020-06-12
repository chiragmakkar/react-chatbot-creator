import styled from 'styled-components';

export const CodeEditorWrapper = styled.div`
  display: inline-block;
  width: 40%;
`;

export const TabPaneWrapper = styled.div`
  bordertop: solid 2px #2b2b2b;
  display: inline-block;
  width: 100%;
  height: 5%;
  padding: 1% 1% 0% 1%;
`;

export const TabListWrapper = styled.div`
  display: inline-block;
  width: 75%;
  height: 100%;
`;

export const TabWrapper = styled.div`
  font-family: Quicksand;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #c6c6c6;
  margin-left: ${props => (!props.deletable ? '3%' : undefined)};
  border-left: ${props => (!props.deletable ? 'solid 2px #2b2b2b' : undefined)};
  border-top: solid 2px #2b2b2b;
  border-right: solid 2px #2b2b2b;
  min-width: 10%;
  padding: 1.5% 1% 1% 1%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 100%;
  background-color: ${props => (props.selected ? '#1f1f1f' : '#171717')};
  display: inline-block;
`;

export const AddTabWrapper = styled.div`
  width: 2%;
  display: inline-block;
  margin-left: 2%;
`;

export const SaveButtonWrapper = styled.div`
  display: inline-block;
  width: 25%;
`;

export const CodePaneWrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

export const MonacoWrapper = styled.div`
  width: 100%;
  height: 100%;
  fontfamily: Quicksand;
  fontsize: 14px;
  fontweight: normal;
  fontstretch: normal;
  fontstyle: normal;
  lineheight: normal;
  letterspacing: normal;
  color: #d3d3d3;
`;
