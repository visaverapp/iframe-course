import {useLazyGetDocsQuery} from "@/api";
import summary from '../ReezOnly/summaryReezOnly.png'

interface SummaryProps {
  id: string
  playlistId: string
}
export const Summary = ({id, playlistId}: SummaryProps) => {
  const [getDocs] = useLazyGetDocsQuery();
  const getSummaryHandle = async () => {
    const summary = await getDocs({ playlistId: playlistId, videoPublicId: id });
    console.log(summary);
    // if (summary.isError) {
    //   showNotification({ text: `Не получилось скачать конспект. Попробуйте чуть позже`, severity: 'error' });
    // }

    if (summary.data) {
      const a = document.createElement('a');
      a.href = summary.data;
      a.target = '_blanc';
      a.download = `${id}.pdf`;

      a.click();
    }
  };

  return (
      <div>
<img src={summary}/>
{/*        <div>{content}</div>*/}
{/*        <button onClick={getSummaryHandle}></button>*/}
      </div>
  );
};

