import {useSearchParams} from "react-router-dom";
import {createRef, RefObject, useCallback, useMemo, useRef, useState} from "react";
import {LabelText} from "@/styles";
import {useOutsideClick} from "@/hooks/useOutsideClick";
import SearchIcon from "@/components/SVGIcons/SearchIcon";
import {
  SuggestionSearchWrapper,
  SuggestionsItem,
  SuggestionsList
} from "@/components/SearchInput/SearchInputStyle";
import {useDebounce} from "@/hooks/useDebounce";

export const SearchInput = ({suggestionsList}: { suggestionsList: string[] }) => {

  const [params, setParams] = useSearchParams();

  const search = useRef<HTMLInputElement | null>(null);

  const [suggestions] = useState<string[]>(suggestionsList);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [open, setOpen] = useState(false);

  // const [getSuggestions] = useLazyGetSuggestionsQuery();
  // const [getVideos] = useLazyGetSearchVideosQuery();

  const wrapperRef = useOutsideClick<HTMLDivElement>(() => {
    setOpen(false);
  });

  // useGetSearchVideosQuery({ query: search.current?.value || params.get('search') }, { skip: !params.get('search') });

  // const debounceSuggestions = useDebounce(async () => {
  //   try {
  //     const data = query ? await getSuggestions({ query }).unwrap() : [];
  //     setOpen(true);
  //     setSuggestions(suggestionsList);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, 250);

  const onSearchHandler = () => {
    const value = search.current?.value;
    if (value) {
      pickSuggestion(value);
    }
  };

  const pickSuggestion = (value: string) => {
    search.current && (search.current.value = value);
    // getVideos({ query: value });
    setOpen(false);
    setParams((prev) => ({ ...prev, search: value }));
    // ga4.event({
    //   category: 'Search',
    //   action: 'Search',
    //   label: 'Search',
  };

  const makeSearch = useDebounce(() => {
    const data = search.current?.value || '';
    if (data) {
      setParams({ search: data });
    } else {
      setParams({});
    }
  }, 500);

  const onChange = useCallback(async () => {
    // await debounceSuggestions(e.target.value);
    makeSearch();
  }, []);

  const refs = useMemo(
      () =>
          suggestions.reduce((acc, item) => {
            acc[item] = createRef<HTMLLIElement>();
            return acc;
          }, {} as Record<string, RefObject<HTMLLIElement>>),
      [suggestions],
  );

  const scrollToRef = (value: string, block: 'start' | 'end' | 'center' | 'nearest') => {
    const ref = refs[value].current;
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block });
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const searchInput = search.current;
    if (selectedSuggestion < suggestions.length) {
      switch (e.key) {
        case 'Escape':
          setSelectedSuggestion(-1);
          setOpen(false);
          break;
        case 'Enter':
          onSearchHandler();
          searchInput?.blur();
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (selectedSuggestion > 0) {
            setSelectedSuggestion((prev) => prev - 1);
            searchInput && (searchInput.value = suggestions[selectedSuggestion - 1]);
            scrollToRef(suggestions[selectedSuggestion - 1], 'center');
          } else {
            setSelectedSuggestion(-1);
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (selectedSuggestion < suggestions.length - 1) {
            setSelectedSuggestion((prev) => prev + 1);
            searchInput && (searchInput.value = suggestions[selectedSuggestion + 1]);

            scrollToRef(suggestions[selectedSuggestion + 1], 'end');
          } else {
            setSelectedSuggestion(suggestions.length - 1);
          }
          break;
        default:
          break;
      }
    } else {
      setSelectedSuggestion(-1);
    }
  };

  return (
      <div className='flex flex-col justify-center items-center gap-[48px]' ref={wrapperRef}>
        <div className='relative'>
        <input
            type="text"
            ref={search}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onFocus={() => setOpen(true)}
            defaultValue={params.get('search') ?? ''}
            placeholder='Какие слова ищем в этом курсе?'
            className='w-[706px] h-[52px] focus:outline-none focus:border-light-gray self-end pl-[16px] pr-[45px] pt-[7px] pb-[10px] border-white-active border-[1px] rounded-[12px] text-[16px] text-dark-blue'
        />
          <div className='absolute right-[2%] top-[29%]'>
            <SearchIcon/>
          </div>
        </div>
        {suggestions.length > 0 && open && (
            <SuggestionSearchWrapper>
              <SuggestionsList>
                {suggestions.map((suggestion, i) => (
                    <SuggestionsItem
                        key={suggestion}
                        onClick={(e) => {
                          e.stopPropagation();
                          pickSuggestion(suggestion);
                        }}
                        selected={selectedSuggestion === i}
                        ref={refs[suggestion]}
                        onMouseEnter={() => {
                          setSelectedSuggestion(i);
                        }}
                    >
                      <LabelText dangerouslySetInnerHTML={{ __html: highlightText(suggestion, search.current!.value) }} />
                    </SuggestionsItem>
                ))}
              </SuggestionsList>
            </SuggestionSearchWrapper>
        )}
      </div>
  );
};

export const highlightText = (text: string, search: string) => {
  const regex = new RegExp(`(${search})`, 'gi');
  return text.replace(regex, '<span>$1</span>');
};







/*const { setSearchStatus, setSearchValue } = useActions();
  const navigate = useNavigate();
  const location = useLocation();
  const [params, setSearch] = useSearchParams();

  const searchParamFunc = useLatest(() => {
    const search = params.get('search');
    return search ?? '';
  });

  const { statusSearch } = useAppSelector((state) => state.search);

  const [searchInput, setSearchInput] = useState<string>(searchParamFunc.current());
  const [, setSearchInputFocus] = useState<boolean>(false);

  const makeSearch = useDebounce(() => {
    if (searchInput) {
      setSearch({ search: searchInput, page: '1' });
      setSearchStatus(true);
    } else {
      setSearch({});
      setSearchStatus(false);
    }
    setSearchValue(searchInput);
  }, 500);

  useEffect(() => {
    if (searchParamFunc.current()) {
      setSearchStatus(true);
      setSearchValue(searchParamFunc.current());
    }
  }, []);

  useEffect(() => {
    if (!statusSearch) {
      setSearchInput(searchParamFunc.current());
    }
  }, [statusSearch]);

  const searchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    if (location.pathname !== '/') navigate('/');
    makeSearch();
  };

  const searchInFocusInputHandler = (event: FocusEvent<HTMLInputElement>) => {
    if (event) {
      setSearchInputFocus(true);
    }
  };
  const searchInputBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    if (event) {
      setSearchInputFocus(false);
    }
  };*/