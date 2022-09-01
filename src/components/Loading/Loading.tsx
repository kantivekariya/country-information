import "./_loading-style.scss";

interface IProps {
  theme: string;
}

const Loading = ({ theme }: IProps) => (
  <div className="" data-testid="loadingTestId">
    <div className={`spinner ${theme}-loader`}></div>
  </div>
);
export default Loading;
