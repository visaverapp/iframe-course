import styled from 'styled-components';
import {theme} from "@/styles";

export const SuggestionsWrapper = styled.div`
    position: absolute;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white_default};
    border-radius: 10px;
    z-index: 1;
    max-height: 230px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        margin-top: 16px;
        background: white;
    }

    ::-webkit-scrollbar-thumb {
        background: #D3DCE6;
        border-radius: 10px;
    }
`;

export const SuggestionSearchWrapper = styled(SuggestionsWrapper)`
    top: 87px;
    width: 945px;
`;


export const SuggestionsList = styled.ul``;

export const SuggestionsItem = styled.li<{ selected: boolean }>`
    padding: 12px 16px;
    cursor: pointer;
    background-color: ${(props) => (props.selected ? theme.colors.white_hover : 'white')};

    :hover {
        background-color: ${theme.colors.white_hover};
    }

    transition: background-color 0.3s ease;
`;