
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    vector<int> grid[9];
    for(int i=0;i<9;i++){
        for(int j=0;j<9;j++){
            int a;
            cin>>a;
            grid[i].push_back(a);
        }
    }
    solve(grid);
    return 0;
}
Footer
© 2022 GitHub, Inc.
