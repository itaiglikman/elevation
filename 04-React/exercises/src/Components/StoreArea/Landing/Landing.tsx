import type { TypeItem } from "../Item/Item";
import "./Landing.css";

type landingProps = {
  user: string;
  store: TypeItem[];
};

export function Landing(props: landingProps) {
  const { user, store } = props;
  const hottestItem = store.filter((item) => item.hottest)[0];
  return (
    <div className="Landing">
      Welcone {user}, The hottest item is {hottestItem.item} for ${hottestItem.price}
      <hr />
    </div>
  );
}
