---
author: 
created: 2025-03-12
published: 2024-09-26
source: https://jestjs.io/docs/cli
part of:
  - "[[jest Testing Framework]]"
tags:
  - docs/jest
---
The `jest` command line runner has a number of useful options. You can run `jest --help` to view all available options. Many of the options shown below can also be used together to run tests exactly the way you want. Every one of Jest's [Configuration](https://jestjs.io/docs/configuration) options can also be specified through the CLI.

Here is a brief overview:

Run all tests (default):

```r
jest
```

Run only the tests that were specified with a pattern or filename:

```r
jest my-test #or
jest path/to/my-test.js
```

Run tests related to changed files based on hg/git (uncommitted files):

```r
jest -o
```

Run tests related to `path/to/fileA.js` and `path/to/fileB.js`:

```prism
jest --findRelatedTests path/to/fileA.js path/to/fileB.js
```

Run tests that match this spec name (match against the name in `describe` or `test`, basically).

```prism
jest -t name-of-spec
```

Run watch mode:

```prism
jest --watch#runs jest -o by default
jest --watchAll#runs all tests
```

Watch mode also enables to specify the name or path to a file to focus on a specific set of tests.

If you run Jest via your package manager, you can still pass the command line arguments directly as Jest arguments.

Instead of:

```prism
jest -u-t="ColorPicker"
```

you can use:

Jest supports both camelcase and dashed arg formats. The following examples will have an equal result:

```prism
jest --collect-coverage
jest --collectCoverage
```

Arguments can also be mixed:

```prism
jest --update-snapshot --detectOpenHandles
```

note

CLI options take precedence over values from the [Configuration](https://jestjs.io/docs/configuration).

---

When you run `jest` with an argument, that argument is treated as a regular expression to match against files in your project. It is possible to run test suites by providing a pattern. Only the files that the pattern matches will be picked up and executed. Depending on your terminal, you may need to quote this argument: `jest "my.*(complex)?pattern"`. On Windows, you will need to use `/` as a path separator or escape `\` as `\\`.

Alias: `-b`. Exit the test suite immediately upon `n` number of failing test suite. Defaults to `1`.

Whether to use the cache. Defaults to true. Disable the cache using `--no-cache`.

caution

The cache should only be disabled if you are experiencing caching related problems. On average, disabling the cache makes Jest at least two times slower.

If you want to inspect the cache, use `--showConfig` and look at the `cacheDirectory` value. If you need to clear the cache, use `--clearCache`.

Runs tests related to the current changes and the changes made in the last commit. Behaves similarly to `--onlyChanged`.

Runs tests related to the changes since the provided branch or commit hash. If the current branch has diverged from the given branch, then only changes made locally will be tested. Behaves similarly to `--onlyChanged`.

When this option is provided, Jest will assume it is running in a CI environment. This changes the behavior when a new snapshot is encountered. Instead of the regular behavior of storing a new snapshot automatically, it will fail the test and require Jest to be run with `--updateSnapshot`.

Deletes the Jest cache directory and then exits without running tests. Will delete `cacheDirectory` if the option is passed, or Jest's default cache directory. The default cache directory can be found by calling `jest --showConfig`.

caution

Clearing the cache will reduce performance.

Automatically clear mock calls, instances, contexts and results before every test. Equivalent to calling [`jest.clearAllMocks()`](https://jestjs.io/docs/jest-object#jestclearallmocks) before each test. This does not remove any mock implementation that may have been provided.

A glob pattern relative to `rootDir` matching the files that coverage info needs to be collected from.

Forces test results output highlighting even if stdout is not a TTY.

note

Alternatively you can set the environment variable `FORCE_COLOR=true` to forcefully enable or `FORCE_COLOR=false` to disable colorized output. The use of `FORCE_COLOR` overrides all other color support checks.

Alias: `-c`. The path to a Jest config file specifying how to find and execute tests. If no `rootDir` is set in the config, the directory containing the config file is assumed to be the `rootDir` for the project. This can also be a JSON-encoded value which Jest will use as configuration.

Alias: `--collectCoverage`. Indicates that test coverage information should be collected and reported in the output. Optionally pass `<boolean>` to override option set in configuration.

The directory where Jest should output its coverage files.

Indicates which provider should be used to instrument code for coverage. Allowed values are `babel` (default) or `v8`.

Print debugging info about your Jest config.

Attempt to collect and print open handles preventing Jest from exiting cleanly. Use this in cases where you need to use `--forceExit` in order for Jest to exit to potentially track down the reason. This implies `--runInBand`, making tests run serially. Implemented using [`async_hooks`](https://nodejs.org/api/async_hooks.html). This option has a significant performance penalty and should only be used for debugging.

The test environment used for all tests. This can point to any file or node module. Examples: `jsdom`, `node` or `path/to/my-environment.js`.

Make calling deprecated APIs throw helpful error messages. Useful for easing the upgrade process.

Alias: `-e`. Use this flag to show full diffs and errors instead of a patch.

Path to a module exporting a filtering function. This asynchronous function receives a list of test paths which can be manipulated to exclude tests from running by returning an object with shape `{ filtered: Array<{ test: string }> }`. Especially useful when used in conjunction with a testing infrastructure to filter known broken tests, e.g.

my-filter.js

```prism
module.exports=testPaths=>{
const allowedPaths = testPaths
.filter(filteringFunction)
.map(test=>({test}));// [{ test: "path1.spec.js" }, { test: "path2.spec.js" }, etc]

return{
filtered: allowedPaths,
};
};
```

Find and run the tests that cover a space separated list of source files that were passed in as arguments. Useful for pre-commit hook integration to run the minimal amount of tests necessary. Can be used together with `--coverage` to include a test coverage for the source files, no duplicate `--collectCoverageFrom` arguments needed.

Force Jest to exit after all tests have completed running. This is useful when resources set up by test code cannot be adequately cleaned up.

caution

This feature is an escape-hatch. If Jest doesn't exit at the end of a test run, it means external resources are still being held on to or timers are still pending in your code. It is advised to tear down external resources after each test to make sure Jest can shut down cleanly. You can use `--detectOpenHandles` to help track it down.

Show the help information, similar to this page.

Ignore the tests of the specified projects. Jest uses the attribute `displayName` in the configuration to identify each project. If you use this option, you should provide a `displayName` to all your projects.

Generate a basic configuration file. Based on your project, Jest will ask you a few questions that will help to generate a `jest.config.js` file with a short description for each option.

Insert Jest's globals (`expect`, `test`, `describe`, `beforeEach` etc.) into the global environment. If you set this to `false`, you should import from `@jest/globals`, e.g.

```prism
import{expect, jest, test}from'@jest/globals';

jest.useFakeTimers();

test('some test',()=>{
expect(Date.now()).toBe(0);
});
```

note

This option is only supported using the default `jest-circus` test runner.

Prints the test results in JSON. This mode will send all other test output and user messages to stderr.

Run all tests affected by file changes in the last commit made. Behaves similarly to `--onlyChanged`.

Lists all test files that Jest will run given the arguments, and exits.

Logs the heap usage after every test. Useful to debug memory leaks. Use together with `--runInBand` and `--expose-gc` in node.

Prevents Jest from executing more than the specified amount of tests at the same time. Only affects tests that use `test.concurrent`.

Alias: `-w`. Specifies the maximum number of workers the worker-pool will spawn for running tests. In single run mode, this defaults to the number of the cores available on your machine minus one for the main thread. In watch mode, this defaults to half of the available cores on your machine to ensure Jest is unobtrusive and does not grind your machine to a halt. It may be useful to adjust this in resource limited environments like CIs but the defaults should be adequate for most use-cases.

For environments with variable CPUs available, you can use percentage based configuration: `--maxWorkers=50%`

Disables stack trace in test results output.

Activates notifications for test results. Good for when you don't want your consciousness to be able to focus on anything except JavaScript testing.

Alias: `-o`. Attempts to identify which tests to run based on which files have changed in the current repository. Only works if you're running tests in a git/hg repository at the moment and requires a static dependency graph (ie. no dynamic requires).

Alias: `-f`. Run tests that failed in the previous execution.

When `--detectOpenHandles` and `--forceExit` are *disabled*, Jest will print a warning if the process has not exited cleanly after this number of milliseconds. A value of `0` disables the warning. Defaults to `1000`.

Write test results to a file when the `--json` option is also specified. The returned JSON structure is documented in [testResultsProcessor](https://jestjs.io/docs/configuration#testresultsprocessor-string).

Allows the test suite to pass when no files are found.

Run tests from one or more projects, found in the specified paths; also takes path globs. This option is the CLI equivalent of the [`projects`](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig) configuration option.

note

If configuration files are found in the specified paths, *all* projects specified within those configuration files will be run.

Shuffle the order of the tests within a file. The shuffling is based on the seed. See [`--seed=<num>`](https://jestjs.io/docs/#--seednum) for more info.

Seed value is displayed when this option is set. Equivalent to setting the CLI option [`--showSeed`](https://jestjs.io/docs/#--showseed).

```prism
jest --randomize--seed1234
```

note

This option is only supported using the default `jest-circus` test runner.

Run tests with specified reporters. [Reporter options](https://jestjs.io/docs/configuration#reporters-arraymodulename--modulename-options) are not available via CLI. Example with multiple reporters:

`jest --reporters="default" --reporters="jest-junit"`

Automatically reset mock state before every test. Equivalent to calling [`jest.resetAllMocks()`](https://jestjs.io/docs/jest-object#jestresetallmocks) before each test. This will lead to any mocks having their fake implementations removed but does not restore their initial implementation.

Automatically restore mock state and implementation before every test. Equivalent to calling [`jest.restoreAllMocks()`](https://jestjs.io/docs/jest-object#jestrestoreallmocks) before each test. This will lead to any mocks having their fake implementations removed and restores their initial implementation.

A list of paths to directories that Jest should use to search for files in.

Alias: `-i`. Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests. This can be useful for debugging.

Run only the tests that were specified with their exact paths. This avoids converting them into a regular expression and matching it against every single file.

For example, given the following file structure:

```prism
__tests__
└── t1.test.js # test
└── t2.test.js # test
```

When ran with a pattern, no test is found:

```prism
jest --runTestsByPath __tests__/t
```

Output:

```prism
No tests found
```

However, passing an exact path will execute only the given test:

```prism
jest --runTestsByPath __tests__/t1.test.js
```

Output:

```prism
PASS __tests__/t1.test.js
```

tip

The default regex matching works fine on small runs, but becomes slow if provided with multiple patterns and/or against a lot of tests. This option replaces the regex matching logic and by that optimizes the time it takes Jest to filter specific test files.

Sets a seed value that can be retrieved in a test file via [`jest.getSeed()`](https://jestjs.io/docs/jest-object#jestgetseed). The seed value must be between `-0x80000000` and `0x7fffffff` inclusive (`-2147483648` (`-(2 ** 31)`) and `2147483647` (`2 ** 31 - 1`) in decimal).

```prism
jest --seed=1324
```

tip

If this option is not specified Jest will randomly generate the value. You can use the [`--showSeed`](https://jestjs.io/docs/#--showseed) flag to print the seed in the test report summary.

Jest uses the seed internally for shuffling the order in which test suites are run. If the [`--randomize`](https://jestjs.io/docs/#--randomize) option is used, the seed is also used for shuffling the order of tests within each `describe` block. When dealing with flaky tests, rerunning with the same seed might help reproduce the failure.

Run the tests of the specified projects. Jest uses the attribute `displayName` in the configuration to identify each project. If you use this option, you should provide a `displayName` to all your projects.

A list of paths to modules that run some code to configure or to set up the testing framework before each test. Beware that files imported by the setup scripts will not be mocked during testing.

The test suite shard to execute in a format of `(?<shardIndex>\d+)/(?<shardCount>\d+)`.

`shardIndex` describes which shard to select while `shardCount` controls the number of shards the suite should be split into.

`shardIndex` and `shardCount` have to be 1-based, positive numbers, and `shardIndex` has to be lower than or equal to `shardCount`.

When `shard` is specified the configured [`testSequencer`](https://jestjs.io/docs/configuration#testsequencer-string) has to implement a `shard` method.

For example, to split the suite into three shards, each running one third of the tests:

```prism
jest --shard=1/3
jest --shard=2/3
jest --shard=3/3
```

Print your Jest config and then exits.

Prints the seed value in the test report summary. See [`--seed=<num>`](https://jestjs.io/docs/#--seednum) for the details.

Can also be set in configuration. See [`showSeed`](https://jestjs.io/docs/configuration#showseed-boolean).

Prevent tests from printing messages through the console.

A JSON string with options that will be passed to the `testEnvironment`. The relevant options depend on the environment.

Adds a `location` field to test results. Useful if you want to report the location of a test in a reporter.

note

In the resulting object `column` is 0-indexed while `line` is not.

```prism
{
"column":4,
"line":5
}
```

The glob patterns Jest uses to detect test files. Please refer to the [`testMatch` configuration](https://jestjs.io/docs/configuration#testmatch-arraystring) for details.

Alias: `-t`. Run only tests with a name that matches the regex. For example, suppose you want to run only tests related to authorization which will have names like `'GET /api/posts with auth'`, then you can use `jest -t=auth`.

tip

The regex is matched against the full name, which is a combination of the test name and all its surrounding describe blocks.

A single or array of regexp pattern strings that are tested against all tests paths before executing the test. Contrary to `--testPathPattern`, it will only run those tests with a path that does not match with the provided regexp expressions.

To pass as an array use escaped parentheses and space delimited regexps such as `\(/node_modules/ /tests/e2e/\)`. Alternatively, you can omit parentheses by combining regexps into a single regexp like `/node_modules/|/tests/e2e/`. These two examples are equivalent.

A regexp pattern string that is matched against all tests paths before executing the test. On Windows, you will need to use `/` as a path separator or escape `\` as `\\`.

Lets you specify a custom test runner.

Lets you specify a custom test sequencer. Please refer to the [`testSequencer` configuration](https://jestjs.io/docs/configuration#testsequencer-string) for details.

Default timeout of a test in milliseconds. Default value: 5000.

Alias: `-u`. Use this flag to re-record every snapshot that fails during this test run. Can be used together with a test suite pattern or with `--testNamePattern` to re-record snapshots.

Divert all output to stderr.

Display individual test results with the test suite hierarchy.

Alias: `-v`. Print the version and exit.

Watch files for changes and rerun tests related to changed files. If you want to re-run all tests when a file has changed, use the `--watchAll` option instead.

tip

Use `--no-watch` (or `--watch=false`) to explicitly disable the watch mode if it was enabled using `--watch`. In most CI environments, this is automatically handled for you.

Watch files for changes and rerun all tests when something changes. If you want to re-run only the tests that depend on the changed files, use the `--watch` option.

tip

Use `--no-watchAll` (or `--watchAll=false`) to explicitly disable the watch mode if it was enabled using `--watchAll`. In most CI environments, this is automatically handled for you.

Whether to use [`watchman`](https://facebook.github.io/watchman/) for file crawling. Defaults to `true`. Disable using `--no-watchman`.

Whether to use [worker threads](https://nodejs.org/dist/latest/docs/api/worker_threads.html) for parallelization. [Child processes](https://nodejs.org/dist/latest/docs/api/child_process.html) are used by default.

caution

This is **experimental feature**. See the [`workerThreads` configuration option](https://jestjs.io/docs/configuration#workerthreads) for more details.