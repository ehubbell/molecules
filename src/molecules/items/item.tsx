import { BadgeItem, LinkItem, ListItems, TextItem } from 'molecules/items';

export const Item = props => {
	switch (props.type) {
		case 'badge':
			return <BadgeItem {...props} />;

		case 'link':
			return <LinkItem {...props} />;

		case 'list-items':
			return <ListItems {...props} />;

		case 'text':
			return <TextItem {...props} />;
	}
};
