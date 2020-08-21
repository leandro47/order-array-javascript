var items = [
    { name: 'one', value: 3 },
    { name: 'three', value: 5 },
    { name: 'mond', value: 4 },
    { name: 'four', value: 4 },
    { name: 'ajdh', value: 4 },
    { name: 'at', value: 2 },
    { name: 'midnight', value: 8 }
  ];
  
  items.sort((a, b) => b.value - a.value);
  
  items.sort((a, b) => {
    if (a.value === b.value) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
    }
    return 0;
  });
  
  console.log(items);