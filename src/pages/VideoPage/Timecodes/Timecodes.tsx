import {memo, useState} from "react";

const data = [
  {
    "text": "В этом фрагменте видео обсуждаются вопросы организации свадьбы. Один из героев хочет устроить для дочери пышное торжество в дорогом ресторане, но у него не хватает денег. Он пытается убедить остальных участников разговора взять деньги у него, однако те отказываются.\n\nТакже обсуждается выбор ресторана для празднования дня рождения девушки Вики. Некоторые участники диалога считают, что выбранный ресторан недостаточно хорош для праздника.",
    "start": '00:00:00',
    "title": "«Конфликт на кухне: искусство кулинарии и семейные отношения»."
  },
  {
    "text": "Фрагмент видео представляет собой разговор между участниками кулинарного процесса. Один из них, Макс, обвиняет другого в том, что тот испортил отношения и пытается уйти от ответственности. В ходе диалога участники обсуждают рабочие моменты, вспоминают о премии в 50 000 рублей, которую получила Виктория Сергеевна перед уходом.\n\nВ разговоре упоминается спор на 200 000, который один из участников выиграл. Он говорит о том, что постиг все тонкости кулинарии за один день. Участники также обсуждают ингредиенты и специи, используемые в процессе приготовления.\n\nОдин из участников просит помощи у Дмитрия Юрьевича. Выясняется, что у кого-то из присутствующих свадьба. Дмитрий Юрьевич поздравляет молодожёнов и желает им счастья. Затем он обращается к одному из участников, говоря, что ему не стоит волноваться и что всё будет хорошо.",
    "start": '00:00:29',
    "title": "«Санта-Барбара» на кухне"
  },
  {
    "text": "В фрагменте видео обсуждают беспорядок на кухне, хвалят сотрудников за хорошую работу и поздравляют с покупкой машины. Предлагают подвезти домой, но собеседник отказывается. Говорят о скором приезде ревизора и о том, что нужно быть честными в работе. Обсуждают, как действовать, если ревизор заподозрит обман. В конце фрагмента один из участников диалога уходит, сказав «мама, пошёл».",
    "start": '00:00:57',
    "title": "«На кухне: рабочий процесс»"
  },
  {
    "text": "В этом фрагменте видео обсуждается покупка машины на деньги, которые были даны одному из участников разговора. Это вызывает недовольство другого участника, который обвиняет первого в обмане и говорит, что теперь денег на свадьбу нет. Первый участник пытается объяснить происхождение денег, но второй не хочет его слушать. Разговор заканчивается тем, что второй участник отказывается от свадьбы.",
    "start": '00:02:53',
    "title": "Ссора из-за денег на свадьбу"
  },
  {
    "text": "Героиня устала и сообщает, что уезжает работать за границу. Она говорит, что иногда сложно выразить словами свои чувства, и задаётся вопросом, можно ли заменить слова поступками. В конце она описывает человека, который стоит в центре города и не знает, как поступить дальше.",
    "start": '00:04:12',
    "title": "«Мокрый в центре огромного города»"
  },
  {
    "text": "В этом фрагменте видео обсуждаются вопросы организации свадьбы. Один из героев хочет устроить для дочери пышное торжество в дорогом ресторане, но у него не хватает денег. Он пытается убедить остальных участников разговора взять деньги у него, однако те отказываются.\n\nТакже обсуждается выбор ресторана для празднования дня рождения девушки Вики. Некоторые участники диалога считают, что выбранный ресторан недостаточно хорош для праздника.",
    "start": '00:05:00',
    "title": "«Конфликт на кухне: искусство кулинарии и семейные отношения»."
  },
  {
    "text": "Фрагмент видео представляет собой разговор между участниками кулинарного процесса. Один из них, Макс, обвиняет другого в том, что тот испортил отношения и пытается уйти от ответственности. В ходе диалога участники обсуждают рабочие моменты, вспоминают о премии в 50 000 рублей, которую получила Виктория Сергеевна перед уходом.\n\nВ разговоре упоминается спор на 200 000, который один из участников выиграл. Он говорит о том, что постиг все тонкости кулинарии за один день. Участники также обсуждают ингредиенты и специи, используемые в процессе приготовления.\n\nОдин из участников просит помощи у Дмитрия Юрьевича. Выясняется, что у кого-то из присутствующих свадьба. Дмитрий Юрьевич поздравляет молодожёнов и желает им счастья. Затем он обращается к одному из участников, говоря, что ему не стоит волноваться и что всё будет хорошо.",
    "start": '00:07:29',
    "title": "«Санта-Барбара» на кухне"
  },
  {
    "text": "В фрагменте видео обсуждают беспорядок на кухне, хвалят сотрудников за хорошую работу и поздравляют с покупкой машины. Предлагают подвезти домой, но собеседник отказывается. Говорят о скором приезде ревизора и о том, что нужно быть честными в работе. Обсуждают, как действовать, если ревизор заподозрит обман. В конце фрагмента один из участников диалога уходит, сказав «мама, пошёл».",
    "start": '00:07:57',
    "title": "«На кухне: рабочий процесс»"
  },
  {
    "text": "В этом фрагменте видео обсуждается покупка машины на деньги, которые были даны одному из участников разговора. Это вызывает недовольство другого участника, который обвиняет первого в обмане и говорит, что теперь денег на свадьбу нет. Первый участник пытается объяснить происхождение денег, но второй не хочет его слушать. Разговор заканчивается тем, что второй участник отказывается от свадьбы.",
    "start": '00:08:53',
    "title": "Ссора из-за денег на свадьбу"
  },
  {
    "text": "Героиня устала и сообщает, что уезжает работать за границу. Она говорит, что иногда сложно выразить словами свои чувства, и задаётся вопросом, можно ли заменить слова поступками. В конце она описывает человека, который стоит в центре города и не знает, как поступить дальше.",
    "start": '00:10:12',
    "title": "«Мокрый в центре огромного города»"
  }
]

export const Timecodes = memo(() => {
  const [showTextIndex, setShowTextIndex] = useState(null)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleText = (index: any) => {
    setShowTextIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const onReadMoreClick = () => {
    setIsCollapsed(!isCollapsed);
  };


  return (
      <div
          className='h-[293px] scroll-bar overflow-y-scroll w-[712px] rounded-[12px] border-white-active border-[1px] py-[8px] px-[16px]'>
        {data && (
            <ol>
              {data.map(({start, text, title}, i) => (
                  <li onClick={() => toggleText(i)}
                      className='cursor-pointer rounded-[12px] pb-[8px] pr-[8px]' key={i}>
                    <div>
                      <span className='text-lite-green font-open-sans font-bold text-[14px] pr-[5px]'>{start}</span>
                      <span className='text-dark-blue font-open-sans font-bold text-[14px]'>{title}</span>
                    </div>
                    <div className='flex w-[670px] justify-between'>
                      <span
                          className='text-indigo font-open-sans font-normal text-[14px]'>
                        {showTextIndex === i ? text : text.slice(0, 85) + '...'}
                      </span>
                      <span
                          className='self-end cursor-pointer text-green-hover font-open-sans font-normal text-[14px]'>
                        {showTextIndex === i ? 'Свернуть' : '...ещё'}
                      </span>
                    </div>
                  </li>
              ))}
            </ol>
        )}
        <div className='flex justify-end'>
          <span className='cursor-pointer text-green-hover font-open-sans font-normal text-[14px]' onClick={onReadMoreClick}>
            {isCollapsed ? 'Развернуть' : 'Свернуть'}
          </span>
        </div>
      </div>
  );
});

Timecodes.displayName = 'Timecodes';
