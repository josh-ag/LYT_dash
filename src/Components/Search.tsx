import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

type SearchPropTypes = {
  searchTerm: string;
  setSearchTerm: (arg: string) => void;
};

export const Search = ({ searchTerm, setSearchTerm }: SearchPropTypes) => {
  return (
    <InputGroup w={427} alignItems={"center"} justifyContent={"center"}>
      <InputLeftElement pointerEvents="none">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M20.0311 20.79C20.4911 21.25 21.2011 20.54 20.7411 20.09L16.9911 16.33C18.3065 14.8745 19.0336 12.9818 19.0311 11.02C19.0311 6.63 15.4611 3.06 11.0711 3.06C6.68108 3.06 3.11108 6.63 3.11108 11.02C3.11108 15.41 6.68108 18.98 11.0711 18.98C13.0511 18.98 14.8811 18.25 16.2811 17.04L20.0311 20.79ZM4.11008 11.02C4.11008 7.18 7.24008 4.06 11.0701 4.06C14.9101 4.06 18.0301 7.18 18.0301 11.02C18.0301 14.86 14.9101 17.98 11.0701 17.98C7.24008 17.98 4.11008 14.86 4.11008 11.02Z"
              fill="#6A6A6A"
            />
          </g>
        </svg>
      </InputLeftElement>
      <Input
        variant="outline"
        size="lg"
        placeContent="Search"
        placeholder="Search"
        rounded={4}
        value={searchTerm}
        fontWeight={500}
        fontSize={16}
        color={"#6A6A6A"}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputGroup>
  );
};
