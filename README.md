## Marketing Kit 2.0

#### This kit is currently in development and aims to replace our current package @photic/marketing-kit

You can see the current storybook [here](https://kaleido-io.github.io/marketing-kit/)

#### Overview 

This package represents a collection of React components that replace the original static HTML ones in the first marketing kit. It is used in conjunction with our Gatsby builds (docs + marketplace) to keep reused, global components managed and styled in one place.

#### What's Included

The storybook is the best way to quickly see what's available. Use `npm run storybook` to run it locally. Use the `show info` button to see documentation and proptypes. You should also be able to use the widgets/knobs on most components to see what type of customization is avilable.

#### How to Publish

There is no jenkins job on this repo. NPM publishing is done from the command line. Before doing a publish, ensure you've run `npm build` to get the built assets into the appropriate file.

**This likely needs to change, or be documented with ISO**

#### Importing into Gatsby

Once you make a change and publish it here, you'll need to pull the new package version into the projects that use it for them to get the updated assets.
