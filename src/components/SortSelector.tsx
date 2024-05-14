import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import useGameQueryStore from "../Store";


const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
    { value: "-added", label: "Date added" },
    { value: "-released", label: "Release date" },
  ];
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
  const setsortOrder = useGameQueryStore(s => s.setSortOrder)
  
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order by :{currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setsortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
