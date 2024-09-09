import {Tabs} from "@/components/Tabs/Tabs";
import {Toggle} from '@/components/Toggle/Toggle';
import {useState} from "react";
import {
  ResultVideoInnerWithScreenShot
} from "@/pages/Search/components/ResultVideoInnerWithScreenShot/ResultVideoInnerWithScreenShot";
import {SearchVideoCard} from "@/pages/SearchResultPage/SearchVideoCard";

const dataVideos = [
  {
    "publicId": "c2bf1bff-13ec-4090-aa56-c50b5eb364da",
    "title": "Система. ПРО бизнес.",
    "videoId": "DmuB41GNl5U",
    "startsFrom": 0,
    "created": "2024-02-11T15:49:28.160397Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/DmuB41GNl5U/sddefault.jpg",
    "score": 11.0,
    "description": [
      [
        "content",
        "Анализ. Когда и зачем анализировать рынок"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vDmuB41GNl5U&t=117s",
        "durationS": 29,
        "content": "В случае отсутствия <mark>аналит</mark>ического отдела в компании, <mark>анализ</mark> рынка обычно выполняет продакт-оунер, продакт-менеджер или маркетолог. Это особенно актуально для стартапов и малых компаний, которые готовятся к выводу нового продукта на рынок, и для которых важно сначала определить цели анализа.",
        "image": "/frames/video_DmuB41GNl5U/00121.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vDmuB41GNl5U&t=157s",
        "durationS": 101,
        "content": "<mark>Анализ</mark>ируем объем и долю рынка чтобы: 1) оценить его доходность и желание работать с проектом; 2) убедить инвесторов в целесообразности финансирования стартапа. Для анализа используем эффективный метод TAM-SAM-SOM, подробности которого объяснятся в следующем уроке. Кроме того, важно анализировать конкурентов: понимать, кто их клиенты, какие продукты они предлагают, ценообразование, маркетинговые",
        "image": "/frames/video_DmuB41GNl5U/00044.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vDmuB41GNl5U&t=399s",
        "durationS": 60,
        "content": "Описывается процесс анализа рынка для стартапа или уже существующего бизнеса, который сталкивается с необходимостью запуска нового продукта или повышения продаж существующего. В нем обсуждается важность общения с фаундерами других проектов для обмена опытом, особенно если их проекты потерпели неудачу. Далее, разбираются этапы <mark>анализ</mark>а: установление цели исследования, изучение продукта и его характеристик, <mark>анализ</mark> емкости рынка, сегментация рынка и клиентов, составление портрета потребителя, <mark>анализ</mark> эффективности рекламы, и определение политики ценообразования и продвижения.",
        "image": "/frames/video_DmuB41GNl5U/00027.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vDmuB41GNl5U&t=259s",
        "durationS": 48,
        "content": "Мастерство конкурентного <mark>анализ</mark>а для усиления продукта",
        "image": "/frames/video_DmuB41GNl5U/00102.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vDmuB41GNl5U&t=52s",
        "durationS": 65,
        "content": "Процесс <mark>анализ</mark>а рынка включает получение запроса, проведение <mark>анализ</mark>а, разработку маркетинговой или другой стратегии, её внедрение, а затем оценку результатов и выводов с последующим повторением цикла. Анализ необходим для правильного управленческого решения и строительства стратегий маркетинга, продаж и продукта. Для <mark>анализ</mark>а используются digital сервисы, интервью, опросы, эксперименты и другие методы.",
        "image": "/frames/video_DmuB41GNl5U/00079.jpg"
      }
    ]
  },
  {
    "publicId": "a1901a98-22ae-422b-89ab-dc7700708048",
    "title": "Система. ПРО бизнес",
    "videoId": "Z9lbW97Z3VY",
    "startsFrom": 0,
    "created": "2024-02-11T15:46:56.128706Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/Z9lbW97Z3VY/sddefault.jpg",
    "score": 11.0,
    "description": [
      [
        "content",
        "Воронка продаж"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vZ9lbW97Z3VY&t=83s",
        "durationS": 48,
        "content": "Создание этапов продаж на примере воронки с целью фильтрации клиентов и выявления момента, где нарушается коммуникация или предложение не подходит. <mark>Анализ</mark> воронки продаж с использованием различных инструментов, включая CRM, сквозную <mark>аналит</mark>ику и таблицы Excel.",
        "image": "/frames/video_Z9lbW97Z3VY/00115.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vZ9lbW97Z3VY&t=318s",
        "durationS": 13,
        "content": "<mark>Анализ</mark> эффективности встреч на разных стадиях продаж",
        "image": "/frames/video_Z9lbW97Z3VY/00025.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vZ9lbW97Z3VY&t=131s",
        "durationS": 36,
        "content": "Оптимизация воронки продаж: <mark>анализ</mark> отсева клиентов",
        "image": "/frames/video_Z9lbW97Z3VY/00119.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vZ9lbW97Z3VY&t=168s",
        "durationS": 78,
        "content": "Предприниматель замечает, что цикл взаимодействия с клиентами занимает 7 дней и необходимо этот срок сократить. На примере <mark>аналит</mark>ики продаж показывается, что на встречу было назначено 100 человек, но явились лишь 60, что указывает на конверсию во встречу в 60% и потерю 40 клиентов. Рекомендуется применение дашбордов или аналитических инструментов для отслеживания показателей продаж. Процесс продаж разбивается на этапы, начиная с новая заявка, где еще не было общения с",
        "image": "/frames/video_Z9lbW97Z3VY/00160.jpg"
      }
    ]
  },
  {
    "publicId": "a057a4c6-069b-41eb-9b0c-824c3cca5539",
    "title": "Система. ПРО бизнес",
    "videoId": "pIZBgMxoRC0",
    "startsFrom": 0,
    "created": "2024-02-11T15:42:22.392441Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/pIZBgMxoRC0/sddefault.jpg",
    "score": 11.0,
    "description": [
      [
        "content",
        "Введение в финансовый менеджмент"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vpIZBgMxoRC0&t=933s",
        "durationS": 114,
        "content": "Автор обсуждает важность финансового <mark>анализ</mark>а и его роль в выявлении проблем в компании, что является начальным этапом решения этих проблем. Упоминаются три ключевых финансовых отчета: отчет о прибылях и убытках, отчет о движении денежных средств и баланс. Подчеркивается, что когда у компании возникают проблемы, часто прибегают к помощи финансовых специалистов, и важно искать не волшебника",
        "image": "/frames/video_pIZBgMxoRC0/00101.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vpIZBgMxoRC0&t=1665s",
        "durationS": -732,
        "content": "Создание бизнес-планов с фокусом на финансовый <mark>анализ</mark>",
        "image": "/frames/video_pIZBgMxoRC0/00183.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vpIZBgMxoRC0&t=1205s",
        "durationS": 189,
        "content": "Финансовый рычаг: <mark>анализ</mark> рисков и стратегии управления прибыльностью",
        "image": "/frames/video_pIZBgMxoRC0/00181.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vpIZBgMxoRC0&t=1088s",
        "durationS": 38,
        "content": "<mark>Анализ</mark> средних активов и налоговый щит в финансировании компании",
        "image": "/frames/video_pIZBgMxoRC0/00309.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vpIZBgMxoRC0&t=841s",
        "durationS": 825,
        "content": "Финансовый <mark>анализ</mark> и стратегия развития бизнеса",
        "image": "/frames/video_pIZBgMxoRC0/00189.jpg"
      }
    ]
  },
  {
    "publicId": "4da29f67-9609-4911-a3d7-4e597a6022f5",
    "title": "Система. ПРО бизнес",
    "videoId": "BrgAW6KUKoA",
    "startsFrom": 0,
    "created": "2024-02-11T15:37:49.237141Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/BrgAW6KUKoA/sddefault.jpg",
    "score": 11.0,
    "description": [
      [
        "content",
        "Анализ. Как делать анализ конкурентов"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vBrgAW6KUKoA&t=145s",
        "durationS": 165,
        "content": "Фрагванси - это измерение объема денег, потраченных клиентами, подходит для бизнесов с наработанной базой. Для стартапов можно использовать оценку активности. Важен <mark>анализ</mark> лояльности клиентов через NPS (Net Promoter Score), основанный на двух вопросах о вероятности рекомендации бренда и что нужно улучшить. Ответы делят на сторонников (9-10 баллов), нейтральных (7-8 баллов) и критиков (0-6 баллов). Формула NPS: (сторонники - критики) / общее количество респондентов * 100%. Цель - NPS выше 50%. Также рекомендуются опросы",
        "image": "/frames/video_BrgAW6KUKoA/00154.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vBrgAW6KUKoA&t=0s",
        "durationS": 145,
        "content": "Обсуждается важность <mark>анализ</mark>а клиентов, в том числе идентификация признаков незнания клиентской базы, таких как отсутствие апсейл/кросссейл, индивидуальных планов по клиентским сегментам и понимания объемов покупок у конкурентов. Описаны методы <mark>анализ</mark>а: АБЦ-сегментация для определения каналов с максимальным доходом и воронки продаж, и RFM-анализ для разделения клиентов по сумме и регулярности покупок",
        "image": "/frames/video_BrgAW6KUKoA/00012.jpg"
      }
    ]
  },
  {
    "publicId": "dfed9d3c-7e94-4f03-aa34-c0cab9f98b82",
    "title": "Система. ПРО бизнес",
    "videoId": "-6lRkWOMqYM",
    "startsFrom": 0,
    "created": "2024-02-11T15:37:18.866777Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/-6lRkWOMqYM/sddefault.jpg",
    "score": 11.0,
    "description": [
      [
        "content",
        "Анализ. Инструменты анализа рынка"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?v-6lRkWOMqYM&t=0s",
        "durationS": 326,
        "content": "В последнем уроке обсудили анализ рынка и его значимость. Обсуждается алгоритм анализа, который начинается с запроса или цели, за которым следует анализ, стратегия, внедрение и повторный <mark>анализ</mark>. Популярные <mark>аналит</mark>ические запросы включают размер рынка, сектора, спрос, клиентское поведение, барьеры для входа, законодательство и конкуренцию. Сегодняшний урок фокусируется на объеме рынка и трендах. <mark>Анализ</mark> трендов включает мониторинг интересов потребителей и действий конкурентов, важно анализировать будущее, чтобы не упустить новые тенденции, как это было с компанией Kodak. Для анализа трендов используются инструменты",
        "image": "/frames/video_-6lRkWOMqYM/00154.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?v-6lRkWOMqYM&t=832s",
        "durationS": 64,
        "content": "<mark>Анализ</mark> SAM: Как оценить рыночный потенциал",
        "image": "/frames/video_-6lRkWOMqYM/00239.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?v-6lRkWOMqYM&t=663s",
        "durationS": 32,
        "content": "Сравнительный <mark>анализ</mark> методов прогнозирования продаж пиццы",
        "image": "/frames/video_-6lRkWOMqYM/00106.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?v-6lRkWOMqYM&t=577s",
        "durationS": 59,
        "content": "Географические рамки рынка доставки пиццы: <mark>анализ</mark> на примере Беларуси",
        "image": "/frames/video_-6lRkWOMqYM/00395.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?v-6lRkWOMqYM&t=733s",
        "durationS": 99,
        "content": "Описываются методы оценки покупательского спроса и выручки: <mark>анализ</mark> отличий в заказах студентов и семей, использование множителей для получения приблизительной выручки и метод снизу вверх с использованием Яндекс.Вордстат для определения количества запросов доставка еды на дом в Беларуси. Умножая количественные данные на средний чек и рассчитывая на годовой период, можно оценить годовой доход от потребителя, учитывая разницу между постоянными",
        "image": "/frames/video_-6lRkWOMqYM/00122.jpg"
      }
    ]
  },
  {
    "publicId": "b25a25d9-c1f6-4127-aa26-a3672f83fe2d",
    "title": "Система. ПРО бизнес",
    "videoId": "W-W4d2C_9bM",
    "startsFrom": 0,
    "created": "2024-02-11T15:47:56.943496Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/W-W4d2C_9bM/sddefault.jpg",
    "score": 10.642857142857142,
    "description": [
      [
        "content",
        "Обзор площадок для продвижения"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vW-W4d2C_9bM&t=815s",
        "durationS": 76,
        "content": "Динамика использования соцсетей в Беларуси: <mark>анализ</mark> аудитории и рынка",
        "image": "/frames/video_W-W4d2C_9bM/00298.jpg"
      }
    ]
  },
  {
    "publicId": "12b02f02-8d8d-4076-b156-7713e90be91f",
    "title": "Система. ПРО бизнес",
    "videoId": "7YrLJpD34b8",
    "startsFrom": 0,
    "created": "2024-02-11T15:45:55.303970Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/7YrLJpD34b8/sddefault.jpg",
    "score": 10.642857142857142,
    "description": [
      [
        "content",
        "SWOT-анализ"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?v7YrLJpD34b8&t=759s",
        "durationS": 60,
        "content": "Преобразование продукта: SWOT-<mark>анализ</mark> и стратегия улучшений",
        "image": "/frames/video_7YrLJpD34b8/00073.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?v7YrLJpD34b8&t=0s",
        "durationS": 759,
        "content": "SWOT-<mark>анализ</mark> важен для разработки стратегий выхода на рынок или масштабирования бизнеса. Включает <mark>анализ</mark> сильных и слабых сторон, возможностей и угроз. Перед его проведением нужно собрать разнообразную информацию, в том числе <mark>анализ</mark> рынка, целевой аудитории и конкурентов. <mark>Анализ</mark> помогает определить конкурентные преимущества и недостатки продукта, факторы, влияющие на ценообразование, и потенциальные угрозы",
        "image": "/frames/video_7YrLJpD34b8/00260.jpg"
      }
    ]
  },
  {
    "publicId": "0f7cd68c-770e-448e-8268-850d2287f247",
    "title": "Система. ПРО бизнес",
    "videoId": "I9f9402dsdI",
    "startsFrom": 0,
    "created": "2024-02-11T15:44:24.078856Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/I9f9402dsdI/sddefault.jpg",
    "score": 10.642857142857142,
    "description": [
      [
        "content",
        "Юнит экономика"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vI9f9402dsdI&t=0s",
        "durationS": 628,
        "content": "Юнит-экономика: детальный <mark>анализ</mark> доходности бизнес-моделей",
        "image": "/frames/video_I9f9402dsdI/00068.jpg"
      }
    ]
  },
  {
    "publicId": "509fe887-3f4f-4f29-a5d0-6066de044a49",
    "title": "Система. ПРО бизнес",
    "videoId": "Emw6YbO1i34",
    "startsFrom": 0,
    "created": "2024-02-11T15:42:53.030995Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/Emw6YbO1i34/sddefault.jpg",
    "score": 10.642857142857142,
    "description": [
      [
        "content",
        "Управление затратами"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vEmw6YbO1i34&t=212s",
        "durationS": 120,
        "content": "Операционный <mark>анализ</mark> доходов и затрат в Excel: маржинальный доход и рычаги управления рисками",
        "image": "/frames/video_Emw6YbO1i34/00194.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vEmw6YbO1i34&t=836s",
        "durationS": -625,
        "content": "<mark>Анализ</mark> точки безубыточности и маржинального дохода",
        "image": "/frames/video_Emw6YbO1i34/00048.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vEmw6YbO1i34&t=159s",
        "durationS": 678,
        "content": "Использование <mark>анализ</mark>а безубыточности в финансовом моделировании",
        "image": "/frames/video_Emw6YbO1i34/00198.jpg"
      }
    ]
  },
  {
    "publicId": "0733c98d-05fb-44d6-8d06-56fea6acd8e7",
    "title": "Система. ПРО бизнес",
    "videoId": "NA2V7BW1ApM",
    "startsFrom": 0,
    "created": "2024-02-11T15:41:51.963001Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/NA2V7BW1ApM/sddefault.jpg",
    "score": 10.642857142857142,
    "description": [
      [
        "content",
        "CJM или Путь клиента"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vNA2V7BW1ApM&t=866s",
        "durationS": 60,
        "content": "Карта пути клиента: <mark>анализ</mark> и оптимизация взаимодействия",
        "image": "/frames/video_NA2V7BW1ApM/00308.jpg"
      }
    ]
  },
  {
    "publicId": "7df9464f-b21e-4a2e-bbe0-6af0cd7b2a5f",
    "title": "Система. ПРО бизнес",
    "videoId": "F9MicuT-DsU",
    "startsFrom": 0,
    "created": "2024-02-11T15:40:51.272818Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/F9MicuT-DsU/sddefault.jpg",
    "score": 10.642857142857142,
    "description": [
      [
        "content",
        "Ценностное предложения для сегментов"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vF9MicuT-DsU&t=200s",
        "durationS": 21,
        "content": "<mark>Анализ</mark> клиентских ожиданий",
        "image": "/frames/video_F9MicuT-DsU/00049.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vF9MicuT-DsU&t=221s",
        "durationS": 182,
        "content": "Ценностное предложение основывается на <mark>анализ</mark>е проблем, задач и желаемых выгод клиентов. Продукт должен отражать способы решения этих проблем и предоставления выгод. Используются квадраты ценности с проблемами, задачами и факторами выгод, заполняемые стикерами, для визуального соединения потребностей клиентов с предлагаемыми решениями. Примером служат очистители для стекол с наночастицами и ароматизаторами, решающие конкретные проблемы клиента.",
        "image": "/frames/video_F9MicuT-DsU/00230.jpg"
      }
    ]
  },
  {
    "publicId": "a356e7a1-0f74-4d01-8c0d-7839aae21685",
    "title": "Система. ПРО бизнес",
    "videoId": "GzdKw3eVkK8",
    "startsFrom": 0,
    "created": "2024-02-11T15:40:20.903296Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/GzdKw3eVkK8/sddefault.jpg",
    "score": 10.642857142857142,
    "description": [
      [
        "content",
        "Аватар клиента."
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vGzdKw3eVkK8&t=0s",
        "durationS": 426,
        "content": "<mark>Анализ</mark> целевой аудитории",
        "image": "/frames/video_GzdKw3eVkK8/00013.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vGzdKw3eVkK8&t=658s",
        "durationS": 24,
        "content": "Доступны различные <mark>аналит</mark>ические порталы, такие как Яндекс. Ворстат, Яндекс. Метрика, Google Trends, которые предоставляют полезную информацию. Также можно использовать внутренние базы данных компаний, CRM и метрики сайта для анализа данных.",
        "image": "/frames/video_GzdKw3eVkK8/00266.jpg"
      }
    ]
  },
  {
    "publicId": "94d6a613-c1da-4026-ae29-425c70e1f531",
    "title": "Система. ПРО бизнес",
    "videoId": "S5cxBR2SKRA",
    "startsFrom": 0,
    "created": "2024-02-11T15:39:50.516553Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/S5cxBR2SKRA/sddefault.jpg",
    "score": 10.642857142857142,
    "description": [
      [
        "content",
        "Как правильно проводить custdev"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vS5cxBR2SKRA&t=288s",
        "durationS": 60,
        "content": "Качественное исследование требует 20-30 интервью, которые могут проводиться различными участниками стартапа и требуют транскрипции для совместного <mark>анализ</mark>а. Сложный продукт или услуга потребует больше опросов из-за высокой цены ошибки. Респондентов можно найти среди личных контактов, через социальные сети, специальные платформы, группы либо оффлайн в магазинах и торговых центрах. Важно иметь разнообразную выборку респондентов для достоверности результатов и не исключать важные сегменты рынка. Проведение интервью и последующий анализ",
        "image": "/frames/video_S5cxBR2SKRA/00168.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vS5cxBR2SKRA&t=0s",
        "durationS": 71,
        "content": "При проведении КАСДЭВ (качественных <mark>анализ</mark>ов с демонстрацией элементов вашего продукта) важно помнить цель исследования, выявить спрос, ключевые функции продукта и целевые сегменты. Определить группу респондентов и составить список вопросов для опроса. Информацию организовать в таблицу. Простой вариант - провести онлайн-опрос через Google для сбора развернутых ответов.",
        "image": "/frames/video_S5cxBR2SKRA/00049.jpg"
      }
    ]
  },
  {
    "publicId": "d05796bc-c9e3-4f73-b857-3bfa1bc5c33e",
    "title": "Система. ПРО бизнес",
    "videoId": "B_1d_iRyLww",
    "startsFrom": 0,
    "created": "2024-02-11T15:38:49.855441Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/B_1d_iRyLww/sddefault.jpg",
    "score": 10.642857142857142,
    "description": [
      [
        "content",
        "HADI циклы"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vB_1d_iRyLww&t=388s",
        "durationS": 90,
        "content": "Не следует тестировать очевидные гипотезы или уже рабочие; нужно чётко знать, на какой метрик-показатель она влияет; метрики не должны быть придуманы в процессе тестирования и их пересечение усложняет <mark>анализ</mark>; рекомендуется тестировать одну гипотезу за раз.",
        "image": "/frames/video_B_1d_iRyLww/00061.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vB_1d_iRyLww&t=218s",
        "durationS": 58,
        "content": "Гипотеза: изменение кнопки купить с красного на зеленый цвет увеличивает конверсию. Эксперимент: предоставление пользователям обновленного сайта. <mark>Анализ</mark>: сравнение частоты нажатий на кнопки и изучение данных. Результат: 20% рост конверсии с зеленой кнопкой. Применение: использование SMART-технологии для формулировки гипотез.",
        "image": "/frames/video_B_1d_iRyLww/00014.jpg"
      }
    ]
  },
  {
    "publicId": "468cf3a2-a40b-498b-af55-1bb6e4bb20ae",
    "title": "Система. ПРО бизнес.",
    "videoId": "_ZL_OOK5ZaU",
    "startsFrom": 0,
    "created": "2024-02-11T15:38:19.530773Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/_ZL_OOK5ZaU/sddefault.jpg",
    "score": 10.642857142857142,
    "description": [
      [
        "content",
        "Анализ. Как делать анализ клиентов"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?v_ZL_OOK5ZaU&t=145s",
        "durationS": 165,
        "content": "Фрагванси - это измерение объема денег, потраченных клиентами, подходит для бизнесов с наработанной базой. Для стартапов можно использовать оценку активности. Важен <mark>анализ</mark> лояльности клиентов через NPS (Net Promoter Score), основанный на двух вопросах о вероятности рекомендации бренда и что нужно улучшить. Ответы делят на сторонников (9-10 баллов), нейтральных (7-8 баллов) и критиков (0-6 баллов). Формула NPS: (сторонники - критики) / общее количество респондентов * 100%. Цель - NPS выше 50%. Также рекомендуются опросы",
        "image": "/frames/video__ZL_OOK5ZaU/00103.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?v_ZL_OOK5ZaU&t=0s",
        "durationS": 145,
        "content": "Обсуждается важность <mark>анализ</mark>а клиентов, в том числе идентификация признаков незнания клиентской базы, таких как отсутствие апсейл/кросссейл, индивидуальных планов по клиентским сегментам и понимания объемов покупок у конкурентов. Описаны методы <mark>анализ</mark>а: АБЦ-сегментация для определения каналов с максимальным доходом и воронки продаж, и RFM-анализ для разделения клиентов по сумме и регулярности покупок",
        "image": "/frames/video__ZL_OOK5ZaU/00116.jpg"
      }
    ]
  },
  {
    "publicId": "57e5b1fb-d261-451f-870f-42c2c322487d",
    "title": "Система. ПРО бизнес",
    "videoId": "QQDKqtkDttw",
    "startsFrom": 0,
    "created": "2024-02-11T15:35:47.377724Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/QQDKqtkDttw/sddefault.jpg",
    "score": 10.642857142857142,
    "description": [
      [
        "content",
        "Стратегия выхода продукта на рынок"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vQQDKqtkDttw&t=157s",
        "durationS": 449,
        "content": "Оценка инновационности продукта через тестирование MVP необходима для понимания его востребованности. Рекомендуется надстроиться над мелкими игроками на рынке или стать агрегатором услуг. На рынке с монополистом предлагается создать уникальные фичи. Определение стратегии развития начинается с <mark>анализ</mark>а макро- и микросреды: учитываются законодательство, доходы населения, геополитика, конкуренты. Свод-анализ и матрица Ансофа помогают в стратегическом планировании и определении направлений роста и конкурентного преимущества. Цели должны быть SMART: конкретные, достижимые, измеримые, четкие и временно ограниченные, обычно на период до трех лет. Финансовые цели могут включать увеличение доходов или снижение",
        "image": "/frames/video_QQDKqtkDttw/00092.jpg"
      }
    ]
  },
  {
    "publicId": "aaa0a89a-0660-4831-aed8-7ba0fe2131fc",
    "title": "Система. ПРО бизнес",
    "videoId": "-Gx055T0Ekc",
    "startsFrom": 0,
    "created": "2024-02-11T15:46:25.720395Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/-Gx055T0Ekc/sddefault.jpg",
    "score": 10.552631578947368,
    "description": [
      [
        "content",
        "Основы продаж"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?v-Gx055T0Ekc&t=117s",
        "durationS": 444,
        "content": "с разными органами, где каждый играет свою роль для нормального функционирования всей системы. В продажах необходимо начать с определения конечной точки ('точка B'), которая является целью, после чего нужно разработать план действий, выстраивание декомпозиции продаж, маркетинга и финансов от этой конечной точки к текущему состоянию ('точка A'). Декомпозиция продаж включает <mark>анализ</mark> выручки, среднего чека и количества продаж, а также методы обеспечения продаж, такие как телемаркетинг или интернет-маркетинг. Важно также учитывать конверсию в продажу и планировать количество входящих лидов. Кроме этого, нужно определить ключевые этапы воронки продаж и настроить бизнес-процессы. Оргструктура компании помогает в деле декомпозиции ответственности по блокам и",
        "image": "/frames/video_-Gx055T0Ekc/00323.jpg"
      }
    ]
  },
  {
    "publicId": "df886e3b-2004-459f-b267-235022386799",
    "title": "Система. ПРО бизнес",
    "videoId": "cuxfSOt5dtk",
    "startsFrom": 0,
    "created": "2024-02-11T15:43:23.456243Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/cuxfSOt5dtk/sddefault.jpg",
    "score": 10.552631578947368,
    "description": [
      [
        "content",
        "Финансовое планирование.  Бюджетирование"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vcuxfSOt5dtk&t=399s",
        "durationS": 11,
        "content": "Будет проведен <mark>анализ</mark> на примере конкретной модели. Планируется обсудить ключевые трудности, с которыми сталкиваются стартапы.",
        "image": "/frames/video_cuxfSOt5dtk/00186.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vcuxfSOt5dtk&t=473s",
        "durationS": 60,
        "content": "Для стартапов предлагается упрощенное бюджетирование без сложной автоматизации. Вместо полноценного бюджетирования достаточно использовать простую модель отчета о прибылях и убытках, разделив затраты на постоянные и переменные. Важно <mark>анализ</mark>ировать влияние расходов на продажи и выявлять связи с продуктовыми направлениями. При значительных временных разрывах между признанием доходов и расходов требуется план движения денег. Для сложных сценариев можно нанять внешнего финансиста либо использовать готовые модели, например, в Excel, которые включают все формы отчетности. Выбор модели зависит от целей: точного отчета о",
        "image": "/frames/video_cuxfSOt5dtk/00045.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vcuxfSOt5dtk&t=410s",
        "durationS": 63,
        "content": "В стартапах планирование и бюджетирование часто затруднено из-за отсутствия профессионального менеджмента и финансовых директоров. Организационная структура неустойчива, и нет исторических данных для <mark>анализ</mark>а и основы прогнозов, что делает цели больше похожими на желания и фантазии.",
        "image": "/frames/video_cuxfSOt5dtk/00235.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vcuxfSOt5dtk&t=114s",
        "durationS": 54,
        "content": "<mark>Анализ</mark>ируются отклонения от плана за период и определяются их причины. Принимаются корректирующие решения, которые могут затрагивать модель бюджета или подходы к управлению. Бюджетирование включает в себя постановку стратегических целей.",
        "image": "/frames/video_cuxfSOt5dtk/00092.jpg"
      }
    ]
  },
  {
    "publicId": "d91f1a6d-a865-46c1-bd9a-d840f1c38020",
    "title": "Система. ПРО Бизнес",
    "videoId": "ii3kivlz8rs",
    "startsFrom": 0,
    "created": "2024-02-11T15:36:48.152211Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/ii3kivlz8rs/sddefault.jpg",
    "score": 10.552631578947368,
    "description": [
      [
        "content",
        "Продукт. Теория JTBD"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vii3kivlz8rs&t=59s",
        "durationS": 302,
        "content": "продукта или услуги исходя из потребностей и контекста пользователя. Примеры: дрель используется для создания отверстий, стол для рабочего пространства, велосипед для передвижения, кофеварка для быстрого приготовления кофе. При рассмотрении продукта важно понять задачу и контекст, в котором он будет использоваться, для эффективной стратегии продвижения. Описываются три тезиса для использования теории: <mark>анализ</mark> конкурентов, понимание мотивации пользователей и разработка стратегии на основе полученных знаний. Клиентская история строится на формуле как пользователь, я хочу действие, чтобы получить результат, и помогает формировать стратегию и гипотезы.",
        "image": "/frames/video_ii3kivlz8rs/00137.jpg"
      }
    ]
  },
  {
    "publicId": "06cccb18-74c7-456e-8e76-47872be3ef7b",
    "title": "Система. ПРО бизнес",
    "videoId": "X4EDcDdr8ys",
    "startsFrom": 0,
    "created": "2024-02-11T15:47:26.510917Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/X4EDcDdr8ys/sddefault.jpg",
    "score": 10.545454545454545,
    "description": [
      [
        "content",
        "Как продать каждому клиенту"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vX4EDcDdr8ys&t=0s",
        "durationS": 42,
        "content": "Буст продаж: от <mark>анализ</mark>а отказов к совершенствованию предложений",
        "image": "/frames/video_X4EDcDdr8ys/00029.jpg"
      }
    ]
  },
  {
    "publicId": "bffb0e20-e786-4e05-804f-31ce993162de",
    "title": "Система. ПРО бизнес",
    "videoId": "XvaDJl1AQA0",
    "startsFrom": 0,
    "created": "2024-02-11T15:35:16.796758Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/XvaDJl1AQA0/sddefault.jpg",
    "score": 0.6428571428571428,
    "description": [
      [
        "content",
        "Этапы продаж"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vXvaDJl1AQA0&t=1472s",
        "durationS": 9,
        "content": "человека и мы проводим сравнительный <mark>анализ</mark> А после этого любимый инструмент парней девушек это какой это презентация",
        "image": "/frames/video_XvaDJl1AQA0/00668.jpg"
      },
      {
        "timestampLink": "https://www.youtube.com/watch?vXvaDJl1AQA0&t=1097s",
        "durationS": 9,
        "content": "здесь у вас был прекрасный модуль посвящен конкурентному <mark>анализ</mark>у где Вы посмотрите уже что предлагает ваш",
        "image": "/frames/video_XvaDJl1AQA0/00253.jpg"
      }
    ]
  },
  {
    "publicId": "38262076-bfd8-46b7-b6e8-fbda7935f022",
    "title": "Система. ПРО бизнес",
    "videoId": "X7npAR95Hwg",
    "startsFrom": 0,
    "created": "2024-02-11T15:48:57.708842Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/X7npAR95Hwg/sddefault.jpg",
    "score": 0.5434782608695652,
    "description": [
      [
        "content",
        "Контент в СММ"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vX7npAR95Hwg&t=129s",
        "durationS": 13,
        "content": "наверное Это самый распространенный миф об smm Конечно же это это не так вся статистика вся <mark>аналит</mark>ика и самая свежая",
        "image": "/frames/video_X7npAR95Hwg/00044.jpg"
      }
    ]
  },
  {
    "publicId": "ea2f0601-c3e0-4c22-9dc7-1db55e86eede",
    "title": "Система. ПРО бизнес",
    "videoId": "xTF8Mr-gFuc",
    "startsFrom": 0,
    "created": "2024-02-11T15:45:24.852620Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/xTF8Mr-gFuc/sddefault.jpg",
    "score": 0.5434782608695652,
    "description": [
      [
        "content",
        "Выход на рынок. Метрики MVP"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vxTF8Mr-gFuc&t=640s",
        "durationS": 11,
        "content": "привели нам авторы книги лин-<mark>аналит</mark>икс и они предлагают ориентироваться на следующие показатели первое Будьте всегда готовы что",
        "image": "/frames/video_xTF8Mr-gFuc/00043.jpg"
      }
    ]
  },
  {
    "publicId": "ef336f99-c4a3-4d48-a815-edd7f04f1f2a",
    "title": "Система. ПРО бизнес",
    "videoId": "hynVt4HfsFU",
    "startsFrom": 0,
    "created": "2024-02-11T15:41:21.669939Z",
    "thumbnailUrl": "https://i.ytimg.com/vi/hynVt4HfsFU/sddefault.jpg",
    "score": 0.5434782608695652,
    "description": [
      [
        "content",
        "ABCDX сегментация"
      ],
      [
        "highlights",
        []
      ]
    ],
    "cues": [
      {
        "timestampLink": "https://www.youtube.com/watch?vhynVt4HfsFU&t=271s",
        "durationS": 11,
        "content": "можете обратиться к источникам интернета и <mark>аналит</mark>ики а также вы можете пойти к конкурентам посмотреть что у них",
        "image": "/frames/video_hynVt4HfsFU/00025.jpg"
      }
    ]
  }
]
// const suggestions = [
//   "Оценка рыночного потенциала с методом TAM-SAM-SOM и анализ конкурентов для привлечения инвестиций",
//   "Кто делает рыночный анализ в стартапах без аналитического отдела",
//   "Динамика использования соцсетей в Беларуси: анализ аудитории и рынка",
//   "Анализ эффективности встреч на разных стадиях продаж",
//   "Оптимизация воронки продаж: анализ отсева клиентов",
//   "Оптимизация воронки продаж: анализ этапов и инструментов CRM",
//   "Преобразование продукта: SWOT-анализ и стратегия улучшений",
//   "Юнит-экономика: детальный анализ доходности бизнес-моделей",
//   "Операционный анализ доходов и затрат в Excel: маржинальный доход и рычаги управления рисками",
//   "Анализ точки безубыточности и маржинального дохода",
//   "Финансовый рычаг: анализ рисков и стратегии управления прибыльностью",
//   "Анализ средних активов и налоговый щит в финансировании компании",
//   "Финансовый анализ: ключ к решению проблем компании",
//   "Создание бизнес-планов с фокусом на финансовый анализ",
//   "Финансовый анализ и стратегия развития бизнеса",
//   "Карта пути клиента: анализ и оптимизация взаимодействия",
//   "Анализ клиентских ожиданий",
//   "Анализ целевой аудитории",
//   "Оценка лояльности клиентов и анализ NPS для бизнеса",
//   "Анализ SAM: Как оценить рыночный потенциал",
//   "Сравнительный анализ методов прогнозирования продаж пиццы",
//   "Географические рамки рынка доставки пиццы: анализ на примере Беларуси",
//   "Мастер-класс: Анализ трендов рынка и объема",
//   "Стратегии анализа рынка для оптимизации продаж",
//   "Мастерство конкурентного анализа для усиления продукта",
//   "Цикл анализа рынка и стратегического планирования",
//   "Искусство использования трекеров для мастерства анализа рынка",
//   "Буст продаж: от анализа отказов к совершенствованию предложений",
//   "Необходимость SWOT-анализа для стратегии бизнеса",
//   "Сравнение скорости и стоимости разработки MVP, MMP, MMF и MLP с анализом кейса Dropbox",
//   "Использование анализа безубыточности в финансовом моделировании",
//   "Освоение АБЦ и RFM анализов для умного клиентского управления",
//   "Умение анализировать клиентов как ключ к успешным продажам",
//   "Использование Tama и Яндекс.Воркстат для анализа запросов",
//   "Статистика поисковых запросов как метод анализа рынка доставки еды в Беларуси",
//   "Взаимосвязь медийной доли и КПИ: Проблемы аналитики в соцсетях",
//   "Отчетность и аналитика для финансового управления и KPI",
//   "Аналитические Инструменты"
// ]


const video = {
  "publicId": "c2bf1bff-13ec-4090-aa56-c50b5eb364da",
  "title": "Система. ПРО бизнес.",
  "videoId": "DmuB41GNl5U",
  "source": "YOUTUBE",
  "originLink": "https://www.youtube.com/watch?v=DmuB41GNl5U",
  "startsFrom": 0,
  "description": "Анализ. Когда и зачем анализировать рынок.",
  "thumbnailUrl": "https://i.ytimg.com/vi/DmuB41GNl5U/sddefault.jpg",
  "purpose": "PERSONAL",
  "quizIds": [
    "ac4f2bcd-6451-4eb0-828e-507ce3b2b181"
  ]
}

export const SearchResultPage = () => {
  // const [params] = useSearchParams();
  const [isChecked] = useState(false)
  const [activeTab, setActiveTab] = useState(0);

  // const [loading, setLoading] = useState(false)
  // const [filteredData, setFilteredData] = useState<Video[]>()
  // const dispatch = useAppDispatch()

  // const { data, isFetching, isLoading, error } = useGetSearchVideosQuery(
  //     { query: params.get('search') },
  //     { skip: !params.get('search') },
  // );

  // const { data: suggestions = [] } = useGetSuggestionsQuery(
  //     { query: params.get('search') },
  //     { skip: !params.get('search') },
  // );
  // const { catchError } = useHandlingError();
  //
  // useEffect(() => {
  //   catchError(error);
  // }, [error]);


  return (
      <div>
        <div>
          <div className='absolute left-[4%] top-[16%]'>
            <Toggle title='Искать по точному совпадению' checked={isChecked} onChange={() => {
            }}/>
          </div>
          <Tabs activeTab={activeTab} onChange={(index: number) => setActiveTab(index)}/>
        </div>
        <div className='relative flex flex-col h-[412px] scroll-bar overflow-y-scroll'>
          {activeTab === 0 ?
              <div>
                <SearchVideoCard video={video}/>
                <ResultVideoInnerWithScreenShot videos={dataVideos}/>
              </div>
              :
              activeTab === 1 ? <ResultVideoInnerWithScreenShot videos={dataVideos}/>
                  : activeTab === 2 ? <SearchVideoCard video={video}/> : <></>}
        </div>
      </div>
  );
};

