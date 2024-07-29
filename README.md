# Kayal

This is the Demo site branch for Kayal. Visit [main branch](https://github.com/mnjm/kayal) for the actual theme.

## How to build demo site?

1. Clone the repository if you haven't already:
   ```bash
   git clone https://github.com/mnjm/kayal.git
   ```

2. Use git worktree to checkout the `exampleSite` branch:
   ```bash
   git worktree add ./exampleSite exampleSite
   ```

3. Exclude `exampleSite` from Git tracking:
   ```bash
   echo "exampleSite/" >> .git/info/exclude
   ```

4. CD to `./exampleSite` and Build.
   ```bash
   cd ./exampleSite
   hugo -gc [server] --themesDir ../..
   ```
   - **Important**: Make sure that the root directory (where the repository was cloned) is named `kayal` or pass `--theme <dir name>` to hugo.
