import {useState} from "react";
import {Download} from "@/components/SVGIcons/Download";
import {useLazyGetDocsQuery} from "@/api";

interface SummaryProps {
  // id: string
  // playlistId: string
  // onChange: (value: boolean)=> void
}
export const Summary = ({}: SummaryProps) => {
  const [isCollapsed] = useState(false)
  const playlistId = "59609dd8-7ef4-4080-9cb8-3c2cab266494"
  const videoId = "5ec5bb33-9c1e-4295-8a82-ca36138da3cb"

  const [getDocs] = useLazyGetDocsQuery();
  const getSummaryHandle = async () => {
    const summary = await getDocs({ playlistId: playlistId, videoPublicId: videoId });
    console.log(summary);
    // if (summary.isError) {
    //   showNotification({ text: `Не получилось скачать конспект. Попробуйте чуть позже`, severity: 'error' });
    // }

    if (summary.data) {
      const a = document.createElement('a');
      a.href = summary.data;
      a.target = '_blanc';
      a.download = `${videoId}.pdf`;

      a.click();
    }
  };

  // const onCollapsedClick = () => {
  //   setIsCollapsed(!isCollapsed)
  //   onChange(isCollapsed)
  // }

  return (
      <div
          className={`${!isCollapsed ? 'h-[96vh]' : 'h-[88vh]'} w-[650px] bg-white pt-[8px] pb-[16px] pl-[16px] pr-[8px] rounded-[12px] border border-white-active`}>
        <div className={`${!isCollapsed ? 'h-[93vh]' : 'h-[85vh]'} scroll-bar overflow-y-scroll`}>
          <div className='flex justify-between'>
            <h3 className='pb-[10px] text-dark-blue font-open-sans text-[16px] font-bold'>Стратегия выхода на рынок</h3>
            <div onClick={getSummaryHandle} className='cursor-pointer w-[40px] h-[40px] bg-[#00B856] rounded-[13px] content-evenly pl-[8px]'>
              <Download />
            </div>
          </div>
          <p className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-normal'>Стратегия выхода на рынок нужна
            для
            определения направления развития компании и методов достижения
            целей.</p>
          <ol className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-normal'>Стратегия помогает:
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• понять, в каком направлении
              двигаться;</li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• выявить методы и инструменты для
              достижения целей;
            </li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• сформулировать миссию компании.</li>
          </ol>
          <p className='pb-[20px] text-dark-blue font-open-sans text-[14px] font-normal'>Также стратегия — это документ,
            который
            описывает план действий для достижения цели.</p>

          <h3 className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-bold'>Стратегии продвижения на
            рынке</h3>
          <ol className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-normal'>Существует четыре типа рынка:
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• абсолютно пустой;</li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• с большим количеством мелких
              игроков;
            </li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• с одним крупным
              игроком-монополистом;
            </li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• где есть несколько крупных игроков.
            </li>
          </ol>
          <p className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-normal'>Для каждого из них можно
            подобрать свою
            стратегию продвижения продукта.</p>
          <ul className='pb-[10px]'>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>1.<span
                className='text-dark-blue font-open-sans text-[14px] font-bold'> Абсолютно пустой рынок:</span> у
              вас есть все шансы стать номером один или не добиться успеха. Необходимо провести тестирование, чтобы
              понять, насколько продукт инновационен и востребован.
            </li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>2.<span
                className='text-dark-blue font-open-sans text-[14px] font-bold'> Рынок с множеством мелких игроков:</span> можно
              попробовать стать агрегатором услуг или предложить что-то уникальное.
            </li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>3.<span
                className='text-dark-blue font-open-sans text-[14px] font-bold'> Монополист на рынке:</span> сложно
              конкурировать, но если вы уверены в себе, можно создать уникальный продукт и попытаться его продать.
            </li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>4.<span className='text-dark-blue font-open-sans text-[14px] font-bold'> Рынок, где есть крупные игроки с большими инвестициями:</span> можно
              предложить то, чего ещё нет у конкурентов.
            </li>
          </ul>
          <p className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-bold'>Построение стратегии начинается с
            анализа
            макро- и микросреды.</p>
          <p className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-normal'>Макросреда включает внешние
            факторы, которые могут повлиять на успех продукта: законодательство, доходы
            населения, геополитические факторы.</p>
          <p className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-normal'>Микросреда — это анализ
            конкурентов, их развития, сильных и слабых сторон.</p>
          <p className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-normal'>Анализ конкурентов позволяет
            выявить конкурентные преимущества и определить стратегию развития. Можно
            использовать матрицу Ансоффа для поиска способов увеличения оборота или завоевания нового рынка.</p>

          <h3 className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-bold'>Методы анализа лояльности
            клиентов</h3>
          <p className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-normal'>Метод анализа лояльности
            клиентов
            (Net
            Promoter Score, NPS) подходит для бизнесов с наработанной базой.</p>
          <ol className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-bold'>Для расчёта индекса лояльности
            нужно задать клиентам два вопроса:
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>1.С какой вероятностью вы будете
              рекомендовать нас?</li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>2.Что нам нужно улучшить в следующий
              раз,
              чтобы получить от вас 10?
            </li>
          </ol>
          <ul className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-bold'>Ответы делятся на три категории:
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• Сторонники — те, кто поставил 9 или
              10
              баллов.</li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• Нейтральные — 7 или 8 баллов.</li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• Критики — 0, 6 или меньше баллов.
            </li>
          </ul>
          <p className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-normal'>Индекс лояльности
            рассчитывается
            по формуле: (сторонники – критики) / общее количество респондентов * 100. Он
            должен быть больше 50 %.</p>
          <ol className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-bold'>Кроме метода NPS, существуют и
            другие способы исследования клиентов:
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• Каст-депы и опросы.</li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• Общение с клиентами.</li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'>• Цифровые методы исследования.</li>
          </ol>
          <p className='pb-[10px] text-dark-blue font-open-sans text-[14px] font-normal'>Есть сервисы, которые
            предоставляют информацию о клиентах.</p>
          <ul className='pb-[10px]'>Например:
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'><span
                className='text-dark-blue font-open-sans text-[14px] font-bold'>UberSuggest</span> — помогает понять,
              какие
              термины имеют отношение к бизнесу и что привлекает внимание
              пользователей.</li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'><span
                className='text-dark-blue font-open-sans text-[14px] font-bold'>MakeMyPersona</span> — создаёт аватар
              идеального покупателя.
            </li>
            <li className='text-dark-blue font-open-sans text-[14px] font-normal'><span
                className='text-dark-blue font-open-sans text-[14px] font-bold'>UXpressia</span> — инструмент для
              создания
              стратегии клиентского опыта.
            </li>
          </ul>
          <p className='text-dark-blue font-open-sans text-[14px] font-normal pb-[8px]'>Также можно использовать индустриальные
            отчеты, отчеты консалтинговых компаний и другие открытые источники.</p>
          {/*<div className='fixed bottom-[5%] right-[3%]'>*/}
          {/*<span className='cursor-pointer text-[#6F42C1] font-open-sans font-normal text-[14px]'*/}
          {/*      onClick={onCollapsedClick}>*/}
          {/*  {isCollapsed ? 'Развернуть' : 'Свернуть'}*/}
          {/*</span>*/}
          {/*</div>*/}
        </div>
      </div>
  );
};