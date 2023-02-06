
void main()
{
  int
   i,j,n,t=1;
  clrscr();
  printf("enter the number");
  scanf("%d",&n);
  for(i=1;i<=n;i++)
    {
      for(j=i;j>=1;j--)
	{
	  printf("%c ",i+64);
	}
	  printf("\n");
    }
  getch();
  }
