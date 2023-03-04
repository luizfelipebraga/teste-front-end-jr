import { Li, Ul } from "./styles";

type Tabsrops = {
  name: string;
  isFirstIndex?: boolean;
};

export function Tabs({ name, isFirstIndex }: Tabsrops) {
  return (
    <Ul>
      <Li red={isFirstIndex}>
        <a href="#">
          <span>{name}</span>
        </a>
      </Li>
    </Ul>
  );
}
