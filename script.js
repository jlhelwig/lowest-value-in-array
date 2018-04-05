function findSmallestInt(args) {
  let smallest=args[0]
  for (i=0; i<args.length-1; i++){
    if (smallest>args[i+1]){
      smallest = args[i+1];
    }
  }
  return smallest
}



findSmallestInt([78,56,232,12,8])
