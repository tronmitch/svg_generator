const fs = require('fs');
const inquirer = require('inquirer');
const createSVG = require('../index.js');

jest.mock('inquirer');

describe('createSVG', () => {
    it('should take 4 inputs and create an SVG', async () => {
        inquirer.prompt.mockResolvedValue({
            logo_text: 'ABC',
            logo_text_color: 'red',
            logo_shape: 'Circle',
            logo_shape_color: 'blue',
        });

        await createSVG;
        const writeFileMock = jest.spyOn(fs, 'writeFile').mockImplementation((path, data, callback) => {
            callback(null);
        });

        expect(writeFileMock).toHaveBeenCalledWith(
            './example/Circle_blue_ABC.svg',
            expect.stringContaining('<circle fill="blue"'),
            expect.any(Function)
        );

        // Clean up
        // writeFileMock.mockRestore();
    });
});
