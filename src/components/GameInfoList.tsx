interface ListItem {
  name?: string;
  id?: number;
}

interface PropTypes {
  title: string;
  items: Array<ListItem> | Array<{ platform: ListItem }> | undefined;
}

export default function GameInfoList({ title, items }: PropTypes) {
  return (
    <div>
      <div className='title--sub'>{title}</div>
      <div className='list-box'>
        {!!items &&
          items.map((item) => {
            let dissectedItem: ListItem | undefined;
            if ('platform' in item) {
              const { platform } = item;
              dissectedItem = platform;
            }
            const processedItem = dissectedItem ?? (item as ListItem);
            return (
              <div key={processedItem.id} className='list-item'>
                {processedItem.name}
              </div>
            );
          })}
      </div>
    </div>
  );
}
