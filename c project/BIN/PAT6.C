void main()
{
  int
   i,j,n,t;
  clrscr();
  printf("enter the number");
  scanf("%d",&n);
  for(i=1;i<=n;i++)
    { t=1;
      for(j=1;j<=i*2-1;j++)
	{
	  printf("%c ",t+64);
	  j<i?t++:t--;
	}
	  printf("\n");
    }
  getch();
  }
